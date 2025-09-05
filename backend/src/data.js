
const portfolioData = {
  summary: {
    totalInvestment: 12580,
    currentValue: 13871.14,
    totalGainLoss: 1291.14,
    returnPercent: 10.26
  },
  sectors: [
    { name: "Technology", value: 7295.48, gainLoss: 795.48, stocks: 2 },
    { name: "Automotive", value: 4296.87, gainLoss: 296.87, stocks: 1 },
    { name: "Financial", value: 1243.47, gainLoss: 123.47, stocks: 1 },
    { name: "Healthcare", value: 1035.31, gainLoss: 75.31, stocks: 1 }
  ],
  holdings: [
    {
      symbol: "AAPL",
      company: "Apple Inc.",
      sector: "Technology",
      quantity: 10,
      purchasePrice: 150,
      currentPrice: 180.38,
      peRatio: 28.5,
      eps: 6.16,
      investment: 1500
    },
    {
      symbol: "GOOGL",
      company: "Alphabet Inc.",
      sector: "Technology",
      quantity: 2,
      purchasePrice: 2500,
      currentPrice: 2757.17,
      peRatio: 22.8,
      eps: 120.45,
      investment: 5000
    },
    {
      symbol: "TSLA",
      company: "Tesla Inc.",
      sector: "Automotive",
      quantity: 5,
      purchasePrice: 800,
      currentPrice: 864.86,
      peRatio: 65.2,
      eps: 13.04,
      investment: 4000
    },
    {
      symbol: "JPM",
      company: "JPMorgan Chase",
      sector: "Financial",
      quantity: 8,
      purchasePrice: 140,
      currentPrice: 155.32,
      peRatio: 12.1,
      eps: 12.81,
      investment: 1120
    },
    {
      symbol: "JNJ",
      company: "Johnson & Johnson",
      sector: "Healthcare",
      quantity: 6,
      purchasePrice: 160,
      currentPrice: 172.55,
      peRatio: 15.8,
      eps: 10.76,
      investment: 960
    }
  ]
};

export default portfolioData;
