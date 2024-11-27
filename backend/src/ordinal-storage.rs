use ic_cdk::export::candid::{CandidType, Deserialize};
use ic_cdk::storage;
use ic_cdk_macros::*;
use sha2::{Digest, Sha256};
use std::collections::HashMap;

// Struct to hold Ordinal metadata
#[derive(CandidType, Deserialize, Clone, Debug)]
pub struct OrdinalMetadata {
    pub title: String,
    pub creator: String,
    pub description: String,
    pub timestamp: u64,
}

// Struct to hold data and its hash
#[derive(CandidType, Deserialize, Clone, Debug)]
pub struct OrdinalData {
    pub metadata: OrdinalMetadata,
    pub raw_data: Vec<u8>,
    pub data_hash: String,
}

// Global storage for all Ordinals
type OrdinalsStorage = HashMap<String, OrdinalData>;

#[init]
fn init() {
    storage::stable_save((HashMap::<String, OrdinalData>::new(),)).unwrap();
}

// Insert new Ordinal (ID must be unique)
#[update]
fn insert_ordinal(metadata: OrdinalMetadata, raw_data: Vec<u8>) -> Result<String, String> {
    let storage: &mut OrdinalsStorage = storage::get();

    // Generate unique ID for the Ordinal
    let id = format!("ORD-{}", storage.len());

    if storage.contains_key(&id) {
        return Err("An Ordinal with this ID already exists.".to_string());
    }

    let data_hash = hash_data(&raw_data);
    let ordinal_data = OrdinalData {
        metadata,
        raw_data,
        data_hash: data_hash.clone(),
    };

    storage.insert(id.clone(), ordinal_data);

    Ok(id)
}

// Retrieve metadata and hash by ID (immutable access)
#[query]
fn get_ordinal(id: String) -> Option<OrdinalData> {
    let storage: &OrdinalsStorage = storage::get();
    storage.get(&id).cloned()
}

// Helper function to hash the data
fn hash_data(data: &[u8]) -> String {
    let mut hasher = Sha256::new();
    hasher.update(data);
    format!("{:x}", hasher.finalize())
}

#[pre_upgrade]
fn pre_upgrade() {
    let storage: &OrdinalsStorage = storage::get();
    storage::stable_save((storage,)).unwrap();
}

#[post_upgrade]
fn post_upgrade() {
    if let Ok((old_storage,)) = storage::stable_restore::<(OrdinalsStorage,)>() {
        let storage: &mut OrdinalsStorage = storage::get_mut();
        *storage = old_storage;
    }
}
