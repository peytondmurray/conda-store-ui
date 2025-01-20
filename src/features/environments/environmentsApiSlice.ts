import { ICursorPaginatedApiResponse } from "../../common/interfaces";
import { Environment } from "../../common/models";
import { apiSlice } from "../api";

export const environmentsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchEnvironments: builder.query<
      ICursorPaginatedApiResponse<Environment[]>,
      { limit: number; cursor: string | null; search: string }
    >({
      query: ({ cursor, limit, search }) => {
        const parameters = [
          cursor !== null ? `cursor=${cursor}` : "",
          `limit=${limit}`,
          `search=${search}`
        ];
        const queryParams =
          parameters.length > 0 ? `?${parameters.join("&")}` : "";
        return `/api/v2/environment/${queryParams}`;
      }
    })
  })
});

export const { useLazyFetchEnvironmentsQuery } = environmentsApiSlice;
