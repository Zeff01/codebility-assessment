import { Product } from "@/app/page";
import React from "react";
import Image from "next/image";

export default function ProductModal({
	product,
	setShowModal,
}: {
	product: Product;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div
			className="fixed inset-0 bg-black/50 h-screen w-screen flex items-center justify-center text-white z-40"
			onClick={() => setShowModal(false)}
			role="dialog"
		>
			<div
				className="border border-gray-300 rounded-lg  bg-gray-200 lg:w-200 flex sm:flex-row gap-2 h-160 flex-col m-1 sm:w-[90%] w-[80%] max-h-[95vh] "
				onClick={(e) => e.stopPropagation()}
			>
				<div className="bg-white p-2 h-full  flex items-center justify-center rounded-lg flex-1 relative object-contain ">
					<Image
						src={product.image}
						alt={product.title}
						
						style={{ objectFit: 'contain',padding: '30px' }}
						fill
					/>
				</div>
				<div className="p-4 sm:flex-1 flex flex-col gap-3 flex-2 sm:h-150 h-110 max-h-[94vh] ">
					<h2 className=" font-semibold text-gray-900 text-xl">
						{product.title}
					</h2>
					<p className="text-gray-600">
						{" "}
						<span className="font-semibold"> Id: </span> {product.id}
					</p>
					<p className="text-gray-600 capitalize">
						{" "}
						<span className="font-semibold"> Category: </span>
						{product.category}
					</p>
					<p className="text-gray-600">
						{" "}
						<span className="font-semibold"> Price: </span> ${product.price}
					</p>
					<p className="text-gray-600 h-full overflow-y-auto">
						{" "}
						<span className="font-semibold"> Description: </span>{" "}
						{product.description}
					</p>

					<button
						className="bg-gray-800 hover:bg-gray-500 text-white  py-1 px-3 rounded text-sm font-medium w-fit self-end cursor-pointer"
						onClick={() => setShowModal(false)}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
