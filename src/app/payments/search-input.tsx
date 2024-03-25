import React from "react"
import cn from "classnames"

import { SearchIcon } from "lucide-react"
import { InputProps } from "@/components/ui/input"

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, variant, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input  pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <SearchIcon className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          placeholder={placeholder || "Search..."}
          ref={ref}
          className="rounded-md bg-background w-full px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
        />
      </div>
    )
  }
)

Search.displayName = "Search"

export { Search }
