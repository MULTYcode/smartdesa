import { api } from '@/shared/lib/axios'
import { ResponseType } from '@/types/response.type'
import { MetaType } from '@/types/meta.type';
import { VisiMisiInterface } from '../types/visi-misi';

export const fetchVisiMisi = async (
  page: number,
  search: string = ''
): Promise<{ data: VisiMisiInterface; meta: MetaType }> => {
  const response = await api.get<ResponseType<{ data: VisiMisiInterface; meta: MetaType }>>(
    `/api/v1/category-article?page=${page}&search=${search}`
  )

  return response.data.data;
}
