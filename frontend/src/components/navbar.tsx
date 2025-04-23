import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type NavBarProps = ComponentProps<"nav">;

export function NavBar(props: NavBarProps) {
	return (
		<nav
			{...props}
			className={cn("sticky top-0 bg-white z-100", props.className)}
		>
			<div className="flex flex-row gap-4">
				<Link
					href="/"
					className="text-xl sm:text-2xl font-semibold hover:underline"
				>
					Products
				</Link>
			</div>
		</nav>
	);
}
