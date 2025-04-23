import { NavBar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex flex-col">
			<NavBar className="p-4"/>
      <div className="flex-grow mb-12">
        {children}
      </div>
		</div>
	);
}
