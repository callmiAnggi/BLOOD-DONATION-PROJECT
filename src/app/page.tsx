import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Cross, Hospital, HospitalIcon, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name : "Donor",
    Icon : Cross,
    description : "get your request delivered in email right away",
    link : '/sign-in',
  },
  {
    name : "Hospital",
    Icon : Hospital,
    description : "would like to search donatur manually ?",
    link : '/sign-in?as=hospital'
  },
  {
    name : "Faskes",
    Icon : Leaf,
    description : "have the plaged donatur instantly",
    link : '/faskes'
  }
]

export default function Home() {
  return (
  <>
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Your Blood Donation Page for quick call {' '} 
        <span className="text-blue-600">digital service</span>
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to Blood Fast WebApp. Every donation procedure in this WebApp is regulated by i3l team
      </p>
      <p className="mt-6">Continue as : </p>
      
    </div>
    
    {/* TODO list produvct*/}
  </MaxWidthWrapper>

  <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {perks.map((perk) => (
          
          <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <Link href={perk.link}>
              <button className=" hover:bg-gray-300">
            
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-3/3 h-3/3"/>}
                  </div>
                </div>
            
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>

              </button>
            </Link>
          </div>
        
        ))}
      </div>
    </MaxWidthWrapper>
  </section>
  </>
)}
