import React from "react"
import { DataPendudukInterface, KategoriKeluargaInterface } from "@/types/Simple"

interface DataTableProps {
  data: DataPendudukInterface[],
  kategoriKeluarga: KategoriKeluargaInterface[]
}

const DataTablePenduduk: React.FC<DataTableProps> = ({ data, kategoriKeluarga }) => {
  return (
    <>
      <div className="w-full overflow-x-auto text-md">
        <div className="flex px-6 py-3 font-semibold text-lg">Data Kepala Keluarga Dan Jenis Kelamin</div>
        <table className="min-w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-[#0d6b3f] text-white">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Kategori Keluarga</th>
              <th className="px-4 py-2 whitespace-nowrap">KK</th>
              <th className="px-4 py-2 whitespace-nowrap">L+P</th>
              <th className="px-4 py-2 whitespace-nowrap">L</th>
              <th className="px-4 py-2 whitespace-nowrap">P</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-2 text-center">{item.id + 1}</td>
                <td className="px-4 py-2">{item.wilayah}</td>
                <td className="px-4 py-2 text-center">{item.kk.toLocaleString('id-ID')}</td>
                <td className="px-4 py-2 text-center">{item.lp.toLocaleString('id-ID')}</td>
                <td className="px-4 py-2 text-center">{item.l.toLocaleString('id-ID')}</td>
                <td className="px-4 py-2 text-center">{item.p.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100 font-semibold">
            <tr>
              <td className="px-4 py-2 text-center" colSpan={2}>Total</td>
              <td className="px-4 py-2 text-center">
                {data.reduce((sum, item) => sum + item.kk, 0).toLocaleString('id-ID')}
              </td>
              <td className="px-4 py-2 text-center">
                {data.reduce((sum, item) => sum + item.lp, 0).toLocaleString('id-ID')}
              </td>
              <td className="px-4 py-2 text-center">
                {data.reduce((sum, item) => sum + item.l, 0).toLocaleString('id-ID')}
              </td>
              <td className="px-4 py-2 text-center">
                {data.reduce((sum, item) => sum + item.p, 0).toLocaleString('id-ID')}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className=" w-full overflow-x-auto text-md">
        <div className="flex px-6 py-3 font-semibold text-lg">Kategori Keluarga Dan Kondisi Kesejahteraan Keluarga</div>
        <table className="min-w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-[#0d6b3f] text-white">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Kategori Keluarga</th>
              <th className="px-4 py-2 whitespace-nowrap">Jumlah</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {kategoriKeluarga.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-2 text-center">{item.id + 1}</td>
                <td className="px-4 py-2">{item.kategori}</td>
                <td className="px-4 py-2 text-center">{item.jumlah.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100 font-semibold">
            <tr>
              <td className="px-4 py-2 text-center" colSpan={2}>Total</td>
              <td className="px-4 py-2 text-center">
                {data.reduce((sum, item) => sum + item.kk, 0).toLocaleString('id-ID')}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default DataTablePenduduk