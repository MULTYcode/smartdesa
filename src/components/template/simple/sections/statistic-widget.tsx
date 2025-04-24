import React from 'react'

export default function StatisticWidget() {
    return (
        <aside className="w-full space-y-4">
            <div className="bg-white p-4 shadow rounded-xl">
                <h2 className="text-lg font-semibold mb-2 text-green-700">Statistik Desa</h2>
                <ul className="list-disc pl-5 text-sm">
                    <li>Luas Wilayah: 4,83 km²</li>
                    <li>Banjar: 9</li>
                    <li>Penduduk Miskin: 286 jiwa</li>
                </ul>
            </div>
        </aside>
    )
}