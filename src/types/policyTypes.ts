export type TPolicy = {
  isLiked: boolean;
  polyBizSjNm: string;
  polyItcnCn: string;
  sporCn: string;
  bizPrdCn: string;
  rqutPrdCn: string;
  sporScvl: string;
  ageInfo: string;
  prcpCn: string;
  accrRqisCn: string;
  majrRquisCn: string;
  empmSttsCn: string;
  spizRlmRqisCn: string;
  aditRscn: string;
  prcpLmttTrgtCn: string;
  rqutProcCn: string;
  jdgnPresCn: string;
  rqutUrla: string;
  pstnPaprCn: string;
};

export type TPolicyResponse = {
  policyInfoId: number;
  policyName: string;
  policyContent: string;
  isLiked: boolean;
};

export type TPolicyApiResponse = {
  content: TPolicyResponse[];
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
  first: true;
  empty: false;
};
