export type TGetNoticeListApiProps = {
  pageNum: number;
  size: number;
};
export type TNoticeProps = {
  id: number;
  title: string;
  created_at: string;
  content: string;
};

type TSort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type TPageable = {
  pageNumber: number;
  pageSize: number;
  sort: TSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TNoticeApiResponse = {
  content: TNoticeProps[];
  pageable: TPageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: TSort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
