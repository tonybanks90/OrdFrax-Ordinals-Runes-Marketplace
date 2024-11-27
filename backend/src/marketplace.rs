/// This module defines a simple marketplace for trading ordinals inscribed on Bitcoin.
/// The marketplace allows adding ordinals, listing them for sale, buying them, and querying their details.

/// Represents an ordinal with an ID, owner, and an optional price.
#[derive(CandidType, Deserialize, Clone)]
struct Ordinal {
    id: String,
    owner: String,
    price: Option<u64>,
}

/// Represents the marketplace which holds a collection of ordinals.
#[derive(Default)]
struct Marketplace {
    ordinals: HashMap<String, Ordinal>,
}

impl Marketplace {
    /// Creates a new, empty marketplace.
    fn new() -> Self {
        Self {
            ordinals: HashMap::new(),
        }
    }

    /// Adds a new ordinal to the marketplace.
    ///
    /// # Arguments
    ///
    /// * `id` - A unique identifier for the ordinal.
    /// * `owner` - The owner of the ordinal.
    fn add_ordinal(&mut self, id: String, owner: String) {
        let ordinal = Ordinal {
            id: id.clone(),
            owner,
            price: None,
        };
        self.ordinals.insert(id, ordinal);
    }

    /// Lists an ordinal for sale by setting its price.
    ///
    /// # Arguments
    ///
    /// * `id` - The unique identifier of the ordinal.
    /// * `price` - The price at which the ordinal is listed for sale.
    ///
    /// # Returns
    ///
    /// * `Ok(())` if the ordinal was successfully listed.
    /// * `Err(String)` if the ordinal was not found.
    fn list_ordinal(&mut self, id: String, price: u64) -> Result<(), String> {
        if let Some(ordinal) = self.ordinals.get_mut(&id) {
            ordinal.price = Some(price);
            Ok(())
        } else {
            Err("Ordinal not found".to_string())
        }
    }

    /// Buys an ordinal, transferring ownership to the buyer and removing the price.
    ///
    /// # Arguments
    ///
    /// * `id` - The unique identifier of the ordinal.
    /// * `buyer` - The new owner of the ordinal.
    ///
    /// # Returns
    ///
    /// * `Ok(())` if the ordinal was successfully bought.
    /// * `Err(String)` if the ordinal was not found or not for sale.
    fn buy_ordinal(&mut self, id: String, buyer: String) -> Result<(), String> {
        if let Some(ordinal) = self.ordinals.get_mut(&id) {
            if let Some(price) = ordinal.price {
                ordinal.owner = buyer;
                ordinal.price = None;
                Ok(())
            } else {
                Err("Ordinal is not for sale".to_string())
            }
        } else {
            Err("Ordinal not found".to_string())
        }
    }

    /// Retrieves the details of an ordinal.
    ///
    /// # Arguments
    ///
    /// * `id` - The unique identifier of the ordinal.
    ///
    /// # Returns
    ///
    /// * `Some(Ordinal)` if the ordinal was found.
    /// * `None` if the ordinal was not found.
    fn get_ordinal(&self, id: String) -> Option<Ordinal> {
        self.ordinals.get(&id).cloned()
    }
}

/// Global static instance of the marketplace.
static mut MARKETPLACE: Option<Marketplace> = None;

/// Initializes the marketplace.
#[init]
fn init() {
    unsafe {
        MARKETPLACE = Some(Marketplace::new());
    }
}

/// Adds a new ordinal to the marketplace.
///
/// # Arguments
///
/// * `id` - A unique identifier for the ordinal.
/// * `owner` - The owner of the ordinal.
#[update]
fn add_ordinal(id: String, owner: String) {
    unsafe {
        if let Some(marketplace) = &mut MARKETPLACE {
            marketplace.add_ordinal(id, owner);
        }
    }
}

/// Lists an ordinal for sale by setting its price.
///
/// # Arguments
///
/// * `id` - The unique identifier of the ordinal.
/// * `price` - The price at which the ordinal is listed for sale.
///
/// # Returns
///
/// * `Ok(())` if the ordinal was successfully listed.
/// * `Err(String)` if the ordinal was not found or the marketplace is not initialized.
#[update]
fn list_ordinal(id: String, price: u64) -> Result<(), String> {
    unsafe {
        if let Some(marketplace) = &mut MARKETPLACE {
            marketplace.list_ordinal(id, price)
        } else {
            Err("Marketplace not initialized".to_string())
        }
    }
}

/// Buys an ordinal, transferring ownership to the buyer and removing the price.
///
/// # Arguments
///
/// * `id` - The unique identifier of the ordinal.
/// * `buyer` - The new owner of the ordinal.
///
/// # Returns
///
/// * `Ok(())` if the ordinal was successfully bought.
/// * `Err(String)` if the ordinal was not found, not for sale, or the marketplace is not initialized.
#[update]
fn buy_ordinal(id: String, buyer: String) -> Result<(), String> {
    unsafe {
        if let Some(marketplace) = &mut MARKETPLACE {
            marketplace.buy_ordinal(id, buyer)
        } else {
            Err("Marketplace not initialized".to_string())
        }
    }
}

/// Retrieves the details of an ordinal.
///
/// # Arguments
///
/// * `id` - The unique identifier of the ordinal.
///
/// # Returns
///
/// * `Some(Ordinal)` if the ordinal was found.
/// * `None` if the ordinal was not found or the marketplace is not initialized.
#[query]
fn get_ordinal(id: String) -> Option<Ordinal> {
    unsafe {
        if let Some(marketplace) = &MARKETPLACE {
            marketplace.get_ordinal(id)
        } else {
            None
        }
    }
}
/// Withdraws an ordinal to the owner's wallet.
///
/// # Arguments
///
/// * `id` - The unique identifier of the ordinal.
///
/// # Returns
///
/// * `Ok(Ordinal)` if the ordinal was successfully withdrawn.
/// * `Err(String)` if the ordinal was not found or the marketplace is not initialized.
#[update]
fn withdraw_ordinal(id: String) -> Result<Ordinal, String> {
    unsafe {
        if let Some(marketplace) = &mut MARKETPLACE {
            if let Some(ordinal) = marketplace.ordinals.remove(&id) {
                Ok(ordinal)
            } else {
                Err("Ordinal not found".to_string())
            }
        } else {
            Err("Marketplace not initialized".to_string())
        }
    }
}