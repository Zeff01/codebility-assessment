import { Product } from "@/app/page";
import React, { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }: { product: Product }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<div
				className="border border-gray-300 rounded-lg p-4 bg-white h-full cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
				onClick={() => setShowModal(true)}
			>
				<div className="h-70 object-fill flex items-center justify-center ">
					<Image
						src={product.image}
						alt={product.title}
						width={150}
						height={150}
					/>
				</div>
				<h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
				<p className="text-gray-600">${product.price}</p>
			</div>
			{showModal && (
				<ProductModal product={product} setShowModal={setShowModal} />
			)}
		</div>
	);
}
