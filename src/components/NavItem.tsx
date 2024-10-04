"use client"

import { Interface } from "readline"
import { Button } from "./ui/button"
import { PRODUCT_CATEGORIES } from "@/config"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

//tell the typescript what kind of properties we will have in this component
type Category = typeof PRODUCT_CATEGORIES[number] //from the folder config-index.ts

interface NavItemProps {
    category : Category
    handleOpen: ()=> void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({category, handleOpen, isOpen, isAnyOpen}: NavItemProps) => {
    return <div className="flex">
        <div className="relative flex items-center">
            <Button 
            className="gap-1.5 " 
            onClick={handleOpen} 
            variant={isOpen ? "secondary" : "ghost"}>
                {category.label}
                <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", 
                {
                    "rotate-180": isOpen,
                }
                )}
                />
            </Button> 
        </div>
    </div>
}

export default NavItem