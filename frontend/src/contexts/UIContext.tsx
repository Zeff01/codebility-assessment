"use client";

import { createContext, useContext } from "react";
import { toast } from "sonner";
import { UIContextType, UIProviderProps } from "@/interfaces";

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: UIProviderProps) {
	const showNotification = (
		message: string,
		type: "success" | "error" | "info",
		duration = 5000
	) => {
		switch (type) {
			case "success":
				toast.success(message, { duration });
				break;
			case "error":
				toast.error(message, { duration });
				break;
			case "info":
				toast.info(message, { duration });
				break;
		}
	};

	const value: UIContextType = {
		showNotification,
		notifications: [],
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUIContext() {
	const context = useContext(UIContext);
	if (context === undefined) {
		throw new Error("useUIContext must be used within a UIProvider");
	}
	return context;
}
