export type TgetBankApiResponse = {
  bankName: string;
  bankLogoUrl: string;
};

export type TgetDepositSavingResponse = {
  id: number;
  isLiked: boolean;
  productName: string;
  bankName: string;
  bankLogoUrl: string;
  maxInterestRate: string;
  interestRate: string;
};

export type TgetDepositSavingApiResponse = {
  content: TgetDepositSavingResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type TgetDepositSavingIdApiResponse = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  bankLogoUrl: string;
  bankHomepageUrl: string;
  maxInterestRate: string;
  interestRate: string;
  savingTerms: number[];
  maxLimit: null | number;
  joinMember: string;
  etcNote: string;
};

export type TgetCmaResponse = {
  id: number;
  isLiked: boolean;
  productName: string;
  bankName: string;
  bankLogoUrl: string;
  maturityInterestRate: string;
};

export type TgetCmaApiResponse = {
  content: TgetCmaResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type TgetCmaIdApiResponse = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  bankLogoUrl: string;
  maturityInterestRate: string;
  specialCondition: string;
  joinWay: string;
  depositProtection: string;
  etcNote: string;
  productUrl: string;
};
