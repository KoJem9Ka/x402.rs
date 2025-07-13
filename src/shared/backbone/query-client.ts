import { QueryClient } from '@tanstack/react-query';
import type { MutationKeys, QueryKeys } from '@/shared/backbone/QUERY_KEYS';


declare module '@tanstack/react-query' {
  interface Register {
    queryKey: QueryKeys,
    mutationKey: MutationKeys,
    // defaultError: HTTPError,
    // queryMeta: MyMeta;
    // mutationMeta: {
    //   invalidateQuery?: QueryKey,
    //   invalidateQueries?: QueryKey[],
    //   invalidateFilters?: InvalidateQueryFilters,
    //   successMessage?: string;
    //   errorMessage?: string;
    // },
  }
}


export const queryClient = new QueryClient();
