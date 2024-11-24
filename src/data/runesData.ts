// runesData.ts

export interface Rune {
    name: string;
    volume: number;
    priceSats: number;
    marketCap: number;
    holders: number;
    etchingTime: string;
  }
  
  export const runesData: Rune[] = [
    {
      name: "Rune A",
      volume: 120000,
      priceSats: 15000,
      marketCap: 3600000,
      holders: 320,
      etchingTime: "2023-11-19 10:30 AM",
    },
    {
      name: "Rune B",
      volume: 98000,
      priceSats: 12500,
      marketCap: 2450000,
      holders: 280,
      etchingTime: "2023-11-18 2:15 PM",
    },
    {
      name: "Rune C",
      volume: 75000,
      priceSats: 9800,
      marketCap: 1960000,
      holders: 210,
      etchingTime: "2023-11-17 6:45 PM",
    },
    {
      name: "Rune D",
      volume: 50000,
      priceSats: 8400,
      marketCap: 1500000,
      holders: 150,
      etchingTime: "2023-11-16 3:20 PM",
    },
  ];
  