export type TFinancialProductBookmark = {
  financialProductType: 'SAVING' | 'DEPOSIT';
  isLiked: boolean;
  financialProductId: number;
  companyName: string;
  productName: string;
  interestRate: string;
  maximumPreferredInterestRate: string;
  bankLogoUrl: string;
};

export type TCmaBookmark = {
  isLiked: boolean;
  cmaId: number;
  companyName: string;
  productName: string;
  cmaType: string;
  maximumPreferredInterestRate: string;
  specialCondition: string;
  bankLogoUrl: string;
};

export type TFinancialProductsBookmarkApiResponse = {
  financialProductBookmarks: TFinancialProductBookmark[];
  cmaBookmarks: TCmaBookmark[];
};

export type TEducationBookmarkApiResponse = {
  eduContentBookmarks: TEduBookmark[];
  newsContentBookmarks: TNewsBookmark[];
};

export type TEduBookmark = {
  isLiked: boolean;
  educationInfoId: number;
  title: string;
  content: string;
  contentType: string;
};

export type TNewsBookmark = {
  isLiked: boolean;
  newsContentId: number;
  title: string;
  content: string;
  contentType: string;
};

export type TPoliciesBookmarkApiResponse = {
  data: TPoliciesBookmark[];
};

export type TPoliciesBookmark = {
  isLiked: boolean;
  policyInfoId: number;
  contentName: string;
  content: string;
};
