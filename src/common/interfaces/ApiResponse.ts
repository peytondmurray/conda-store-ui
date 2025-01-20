interface IApiResponse<T = unknown> {
  data: T;
  message: string | null;
  page: number;
  size: number;
  count: number;
  status: string;
}

interface ICursorPaginatedApiResponse<T = unknown> {
  data: T;
  status: string;
  message: string | null;
  cursor: string | null;
  count: number;
}

export { IApiResponse, ICursorPaginatedApiResponse };
