import { useConfigStore } from '@/store/configStore'
import { Skeleton, SkeletonText } from '@/components/design-system/Skeleton'
import { cn } from '@/utils/cn'

export function LoadingScreen() {
  const isLoading = useConfigStore((state) => state.isLoading)

  if (!isLoading) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center',
        'bg-background/88 px-[var(--space-24)] backdrop-blur-md',
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="grid w-full max-w-sm gap-[var(--space-24)] rounded-xl border border-border-subtle bg-surface p-[var(--space-24)] shadow-floating">
        <div className="flex items-center gap-[var(--space-12)]">
          <Skeleton variant="circle" className="size-[var(--space-40)]" />
          <div className="grid flex-1 gap-[var(--space-8)]">
            <Skeleton variant="text" className="w-[44%]" />
            <Skeleton variant="text" className="w-[68%]" />
          </div>
        </div>
        <Skeleton className="h-[var(--space-96)] w-full" />
        <SkeletonText lines={2} />
      </div>
    </div>
  )
}
