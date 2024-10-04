//this component is for making sure that the entire site looks good in terms of layout
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string // symbol "?" because it will be set as default, which could be changed in other components
    children: ReactNode
}) => {
    return (
        <div 
        className={cn(
            "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
        )}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper