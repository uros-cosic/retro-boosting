import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-[60vh] w-full bg-muted-foreground" />
      <Skeleton
        className="h-[40vh] max-w-3xl mx-auto bg-muted-foreground rounded-xl"
        id="contact"
      />
    </div>
  );
}
