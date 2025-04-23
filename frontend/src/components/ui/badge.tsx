import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentProps<"span"> & {
	size?: "sm" | "md";
};

const Badge: React.FC<BadgeProps> = ({ size = "sm", ...props }) => {
	const baseStyles =
    "inline-block w-fit mb-3 rounded-md border border-gray-200 bg-white font-medium text-gray-600"

	const sizeStyles = {
		sm: "px-2 py-0.5 text-xs",
		md: "px-3 py-1 text-sm",
	};

	return (
		<span
			{...props}
			className={cn(
				baseStyles,
				sizeStyles[size],
				props.className,
			)}
		>
			{props.children}
		</span>
	);
};

Badge.displayName = "Badge";

export { Badge };
