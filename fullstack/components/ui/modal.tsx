"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./button";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    actionLabel?: string;
    onAction?: () => void;
    variant?: "default" | "destructive";
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    actionLabel,
    onAction,
    variant = "default",
}) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in zoom-in-95">
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {description && (
                    <p className="text-sm text-gray-500 mb-4">{description}</p>
                )}

                <div className="mb-6">{children}</div>

                <div className="flex justify-end gap-3">
                    <Button variant="secondary" onClick={onClose} type="button">
                        Cancel
                    </Button>
                    {actionLabel && onAction && (
                        <Button
                            variant={variant === "destructive" ? "danger" : "primary"}
                            onClick={() => {
                                onAction();
                                onClose();
                            }}
                        >
                            {actionLabel}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
