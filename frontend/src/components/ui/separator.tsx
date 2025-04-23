import { cn } from "@/lib/utils";

type SeparatorProps = React.ComponentProps<"hr">;

const Separator: React.FC<SeparatorProps> = (props) => {
	return (
			<hr {...props} className={cn("my-6 border-gray-200")} />
	);
};

Separator.displayName = "Separator";

export { Separator };
