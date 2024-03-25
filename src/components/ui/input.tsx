import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

export const inputVariants = cva(
  "flex w-full rounded-md bg-background h-10 px-3 py-2 text-sm",
  {
    variants: {
      variant: {
        default:
          "border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        cell: "p-1 w-[6rem]",
        destructive: "",
        outline: "flex items-center  ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"

    return (
      <Comp
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
