import { api } from '@/shared/lib/axios'
import { ResponseType } from '@/types/response.type'
import { VisiMisiInterface } from '../types/visi-misi';

export const fetchVisiMisi = async (
): Promise<VisiMisiInterface | undefined> => {
  const response = await api.get<ResponseType<VisiMisiInterface[]>>(
    `/api/v1/public/infografis`
  )

  return response.data.data[0];
}
