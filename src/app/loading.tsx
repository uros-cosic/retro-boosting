import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="bg-muted-foreground w-full h-[60vh]" />
      <div className="my-10 w-full h-24">
        <div className="flex items-center justify-between mx-auto max-w-5xl">
          <Skeleton className="bg-muted-foreground w-1/5 h-24" />
          <Skeleton className="bg-muted-foreground w-1/5 h-24" />
          <Skeleton className="bg-muted-foreground w-1/5 h-24" />
          <Skeleton className="bg-muted-foreground w-1/5 h-24" />
        </div>
      </div>
      <Skeleton className="bg-muted-foreground w-full h-[65vh]" />
    </>
  );
}
