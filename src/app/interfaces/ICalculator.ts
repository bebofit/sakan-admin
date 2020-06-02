export interface ICalculator {
  SwRentCommissionPercentage: number;
  InvestorSellCommissionPercentage: number;
  CustomerSellCommissionPercentage: number;
  units: [
    {
      originalPrice: number;
      initMonthlyRent: number;
      rentYears: number;
      upgradeFeePercentage: number;
      isBought: boolean;
      annualRentIncreasePercentage: number;
      annualAppreciationPercentage: number;
    }
  ];
}
