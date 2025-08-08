'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/types/product';
import { productService } from '@/services/productService';
import { LoadingSpinner } from '@/components/Loading';
import { ErrorMessage } from '@/components/ErrorMessage';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    useEffect(() => {
        if (!resolvedParams?.id) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const productData = await productService.getProduct(parseInt(resolvedParams.id));
                setProduct(productData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [resolvedParams?.id]);

    const handleGoBack = () => router.back();
    const handleRetry = () => window.location.reload();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
                <div className="max-w-7xl mx-auto">
                    <ErrorMessage message={error} onRetry={handleRetry} />
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Product not found
                    </h1>
                    <button
                        onClick={handleGoBack}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Products
                    </button>
                </div>

                {/* Product Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-6">
                        {/* Image */}
                        <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain p-4"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                                    ${product.price.toFixed(2)}
                                </span>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-medium">{product.rating.rate}</span>
                                    <span className="ml-1">({product.rating.count} reviews)</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                </span>
                            </div>

                            <div className="mb-8 flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                    Description
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button className="flex-1 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium text-lg">
                                    Add to Cart
                                </button>
                                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
