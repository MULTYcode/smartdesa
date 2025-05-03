import { ProductItem } from '@/types/Simple';
import React from 'react';
import Image from "next/image"

interface ProductListProps {
    products: ProductItem[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white flex flex-col"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover"
                    />

                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-gray-500 mt-1">Penjual: {product.seller}</p>
                        <p className="text-green-600 mt-2 font-bold text-lg mt-auto">
                            Rp {product.price.toLocaleString('id-ID')}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
