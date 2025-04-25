import React from "react"
import { DataPendudukInterface } from "@/types/Simple"

interface DataTableProps {
  data: DataPendudukInterface[]
}

const DataTablePenduduk: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 text-sm md:text-base">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-2 whitespace-nowrap">ID</th>
            <th className="px-4 py-2 whitespace-nowrap">Wilayah</th>
            <th className="px-4 py-2 whitespace-nowrap">KK</th>
            <th className="px-4 py-2 whitespace-nowrap">L+P</th>
            <th className="px-4 py-2 whitespace-nowrap">L</th>
            <th className="px-4 py-2 whitespace-nowrap">P</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b">
              <td className="px-4 py-2 text-center">{item.id+1}</td>
              <td className="px-4 py-2">{item.wilayah}</td>
              <td className="px-4 py-2 text-center">{item.kk}</td>
              <td className="px-4 py-2 text-center">{item.lp}</td>
              <td className="px-4 py-2 text-center">{item.l}</td>
              <td className="px-4 py-2 text-center">{item.p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTablePenduduk
