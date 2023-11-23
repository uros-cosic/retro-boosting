import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="bg-muted-foreground w-full h-[60vh] rounded-none" />
      <div className="h-screen" />
    </>
  );
}
