"use client";

import React from 'react';
import { X, Star, Download, Share, QrCode, Smartphone, Gift } from 'lucide-react';

interface QRModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl max-w-5xl w-full relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg transition-colors z-10 cursor-pointer"
                >
                    <X size={28} strokeWidth={3} className="text-black" />
                </button>
                <div className="flex flex-col lg:flex-row">
                    {/* Left Section - QR Code */}
                    <div className="flex-1 p-8 lg:p-12 text-center">
                        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                            Download Moola now
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Scan the QR Code on your mobile phone to get Moola in your app store!
                        </p>

                        {/* QR Code */}
                        <div className="inline-block bg-white p-6 rounded-2xl shadow-2xl mb-8">
                            <div className="w-48 h-48 bg-black rounded-lg flex items-center justify-center relative">
                                <QrCode className="w-32 h-32 text-white" />
                            </div>
                        </div>

                        {/* Share Button */}
                        <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center mx-auto mb-6 transition-colors">
                            <Share className="w-5 h-5 mr-2" />
                            Share Deal
                        </button>

                        {/* Rating */}
                        <div className="flex items-center justify-center text-white/90 space-x-4 text-sm">
                            <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span>4.9 star rating</span>
                            </div>
                            <div className="flex items-center">
                                <Download className="w-4 h-4 mr-1" />
                                <span>109,000 total downloads</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Gift Cards Grid */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200 opacity-20"></div>

                        {/* Gift Cards Grid - full bleed */}
                        <div className="relative h-full w-full">
                            <div className="grid grid-cols-3 grid-rows-3 gap-0 h-full w-full">
                                {/* Row 1 */}
                                <div className="flex items-center justify-center bg-blue-600 text-white font-bold text-sm">
                                    Walmart
                                </div>
                                <div className="flex items-center justify-center bg-red-500 text-white font-bold text-sm">
                                    Chefs
                                </div>
                                <div className="flex items-center justify-center bg-blue-300">
                                    <Gift className="w-8 h-8 text-white" />
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-center bg-purple-200 text-center font-bold text-lg text-purple-900 px-2">
                                    Gift cards that gift back!
                                </div>
                                <div className="flex items-center justify-center bg-teal-400">
                                    <Smartphone className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex items-center justify-center bg-yellow-300">
                                    <div className="w-8 h-8 bg-white rounded-full"></div>
                                </div>


                                {/* Row 3 */}
                                <div className="flex items-center justify-center bg-blue-400">
                                    <div className="w-6 h-6 bg-white rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-center bg-purple-800 text-white font-bold text-xs">
                                    Wayfair
                                </div>
                                <div className="flex items-center justify-center bg-orange-200">
                                    <Gift className="w-6 h-6 text-orange-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}