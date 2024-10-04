"use client"
//use client for allowing usestate function in next js as a client side
import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

const NavItems = ()=> {
   const [activeIndex, setActiveIndex] = useState<
   null | number
   >(null)
   const isAnyOpen = activeIndex !== null
    return <div className="flex gap-4 h-full ">
        {PRODUCT_CATEGORIES.map((category, i) => {
            
            //keeps track of which navbar is currently open and which one is not
            const handleOpen = () => {
                if (activeIndex === i){
                    setActiveIndex(null)
                } else {
                    setActiveIndex(i)
                }
            }
            //declaring is this item currenntly open or not
            const isOpen = i === activeIndex

            return(
                <NavItem 
                category={category} 
                isOpen={isOpen} 
                handleOpen={handleOpen} 
                key={category.value} 
                isAnyOpen={isAnyOpen}   
                />
            )
        })}
    </div>
}

export default NavItems