import { cn } from "@/lib/utils";
import React from "react";

type CardProps = React.ComponentProps<"div">;
const Card: React.FC<CardProps> = (props) => {
	return (
		<div
			{...props}
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md",
				props.className,
			)}
		>
			{props.children}
		</div>
	);
};
Card.displayName = "Card";


export { Card };

