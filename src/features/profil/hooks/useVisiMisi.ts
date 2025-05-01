import { useQuery } from "@tanstack/react-query";
import { fetchVisiMisi } from "../services/visi-misiApi";

export default function useVisiMisi(page: number, search: string = '') {
    return useQuery({
        queryKey: ['visi-misi', page, search],
        queryFn: () => fetchVisiMisi(page, search),
    })
}