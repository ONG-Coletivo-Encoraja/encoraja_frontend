import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#EFEFEF] text-[#727272] shadow hover:bg-secondary/80",
        secondary:
          "border-transparent bg-[#FFEAEA] text-[#727272] hover:bg-secondary/80",
        tertiary:
          "border-transparent bg-[#70FF87] text-[#727272] hover:bg-secondary/80",
        quaternary:
          "border-transparent bg-[#68D4F6] text-[#727272] hover:bg-secondary/80",
        red:
          "border-transparent bg-[#FF7070] text-white hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
