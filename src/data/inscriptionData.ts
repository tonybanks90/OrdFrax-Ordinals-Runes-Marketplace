export interface InscriptionData {
    id: string; // Unique identifier for the inscription
    imageUrl: string; // Link to the image or inscription content
    transactionUrl: string; // Link to the transaction details
    description: string;
    status: string; // Optional description about the inscription
  }
  
  export const inscriptionData: InscriptionData[] = [
    {
      id: "0e02cf9fda5e8a0f2b3ab15c8f11ba184aecfee6eacee1690906da966bc01309i0",
      imageUrl: "https://via.placeholder.com/600x400",
      transactionUrl: "https://unisat.io/inscription/0e02cf9fda5e8a0f2b3ab15c8f11ba184aecfee6eacee1690906da966bc01309i0",
      description: "An ordinal inscription representing unique on-chain content.",
      status: "Approved"
    },
    {
        id: "XXXXXXX0e02cf9fda5e8a0f2b3ab15c8f11ba184aecfee6eacee1690906da966bc01309i0",
        imageUrl: "https://via.placeholder.com/600x400",
        transactionUrl: "https://unisat.io/inscription/0e02cf9fda5e8a0f2b3ab15c8f11ba184aecfee6eacee1690906da966bc01309i0",
        description: "An ordinal inscription representing unique on-chain content.",
        status: "Approved"
      },
      {
        id: "0e02cf9fc8f11ba184aecfee6eacee1690906da966bc01309i0",
        imageUrl: "https://via.placeholder.com/600x400",
        transactionUrl: "https://unisat.io/inscription/0e02cf9fda5e8a0f2b3ab15c8f11ba184aecfee6eacee1690906da966bc01309i0",
        description: "An ordinal inscription representing unique on-chain content.",
        status: "Approved"
      },
    // Add more inscriptions here as needed
  ];
  