import { EmptyState } from "@/components/empty-state";

export default function NotFound() {
  return (
    <EmptyState
      as="h1"
      title="Page not found"
      description="We couldn't find the page you were looking for."
      action={{ href: "/", label: "Go to the homepage" }}
    />
  );
}
