export type TFinancialProductBookmark = {
  financialProductType: 'SAVING' | 'DEPOSIT';
  financialProductId: number;
  companyName: string;
  productName: string;
  interestRate: string;
  maximumPreferredInterestRate: string;
};

export type TCmaBookmark = {
  cmaId: number;
  companyName: string;
  productName: string;
  cmaType: string;
  maximumPreferredInterestRate: string;
  specialCondition: string;
};

export type TFinancialProductsBookmarkApiResponse = {
  financialProductBookmarks: TFinancialProductBookmark[];
  cmaBookmarks: TCmaBookmark[];
};

export type TEducationBookmarkApiResponse = {
  TEducationBookmark: TEducationBookmark[];
};

export type TEducationBookmark = {
  educationInfoId: number;
  title: string;
  content: string;
  contentType: string;
};

export type TPoliciesBookmarkApiResponse = {
  data: TPoliciesBookmark[];
};

export type TPoliciesBookmark = {
  policyInfoId: number;
  contentName: string;
  content: string;
};
