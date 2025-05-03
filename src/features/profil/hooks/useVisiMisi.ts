import { useQuery } from "@tanstack/react-query";
import { fetchVisiMisi } from "../services/visi-misiApi";

export default function useVisiMisi() {
    return useQuery({
        queryKey: ['visi-misi'],
        queryFn: fetchVisiMisi,
    })
}