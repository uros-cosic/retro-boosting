import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="py-10 space-y-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font bold bg-muted-foreground text-muted-foreground w-fit rounded-xl">
        choose your rank
      </h1>
      <Skeleton className="h-[60vh] w-full bg-muted-foreground py-10 rounded-xl" />
    </div>
  );
}
