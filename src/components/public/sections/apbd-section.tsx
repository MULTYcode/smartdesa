import { useContent } from '@/hooks/useContent'
import React from 'react'
import { ProgressBar } from './progress-bar'
import { Card } from '@/components/ui/simple/card'
export default function APBDSection() {

    const { budgetPelaksanaan, budgetPendapatan, budgetPembelanjaan } = useContent()

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <Card className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-700 mb-4">APBDes 2024 Pelaksanaan</h2>

                            <div className="border-t border-dashed border-gray-300 mb-4"></div>

                            <div className="space-y-4">
                                {budgetPelaksanaan.map((item, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="font-medium text-gray-700">{item.title}</div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">{item.current}</span>
                                            <span className="text-gray-600">{item.target}</span>
                                        </div>
                                        <ProgressBar percentage={item.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-700 mb-4">APBDes 2024 Pendapatan</h2>

                            <div className="border-t border-dashed border-gray-300 mb-4"></div>

                            <div className="space-y-4">
                                {budgetPendapatan.map((item, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="font-medium text-gray-700">{item.title}</div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">{item.current}</span>
                                            <span className="text-gray-600">{item.target}</span>
                                        </div>
                                        <ProgressBar percentage={item.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-700 mb-4">APBDes 2024 Pembelanjaan</h2>

                            <div className="border-t border-dashed border-gray-300 mb-4"></div>

                            <div className="space-y-4">
                                {budgetPembelanjaan.map((item, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="font-medium text-gray-700">{item.title}</div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">{item.current}</span>
                                            <span className="text-gray-600">{item.target}</span>
                                        </div>
                                        <ProgressBar percentage={item.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                </div>
            </section>
        </>
    )
}