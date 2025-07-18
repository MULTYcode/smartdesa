import SettingService from "@/shared/services/setting.service";
import {useQuery} from "@tanstack/react-query"

function useSetting(slug: string, params: Record<string, string | number> = {},) {

    const {
        data,
        isLoading,
        isError,
        isFetching,
        refetch,
      } = useQuery({
        queryKey: [slug, params],
        queryFn: async () => {                    
          return await SettingService.getSetting(slug,params);
        },
      });

  
    return {
      data: data?.data,
      isLoading,
      isFetching,
      refetch,
      isError,
    };
  }
  
  export default useSetting;