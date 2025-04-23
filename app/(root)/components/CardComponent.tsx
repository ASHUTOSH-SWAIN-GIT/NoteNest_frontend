"use client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Upload } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { DollarSign } from 'lucide-react';



export default function ThreeDCardDemo() {
  return (


    <div className="flex flex-wrap justify-center gap-20">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Upload !
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Upload your notes now and access them anytime in the future!          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
          
            <Upload height={1000} width={1000} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"/>
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
         
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Buy Notes !
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Access Notes & Study Materials at an Affordable Price          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
          <ShoppingCart height={1000} width={1000} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"/>

          </CardItem>
          <div className="flex justify-between items-center mt-20">
         
        
          </div>
        </CardBody>
      </CardContainer>


      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Sell Your Notes!
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Earn from Your Notes & Materials with Easy Side Income          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
          <DollarSign height={1000} width={1000} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"/>

          </CardItem>
          <div className="flex justify-between items-center mt-20">
         
          </div>
        </CardBody>
      </CardContainer>
    </div>




  )
}
