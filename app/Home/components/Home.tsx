"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { ScrollText } from "lucide-react"
import { CreditCardIcon } from "lucide-react"
import { ShoppingCartIcon } from "lucide-react"
import { DollarSignIcon } from "lucide-react"
import { UserPenIcon } from "lucide-react"
import {FileUpload} from "@/components/ui/file-upload"
import { CardWithForm } from "./inputCard"

export default function SidebarDemo() {
  const links = [
    {
      label: "Your Notes",
      href: "#",
      icon: <ScrollText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200 font-bold" />,
    },
    {
      label: "purchase Notes",
      href: "#",
      icon: <CreditCardIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Your Cart",
      href: "#",
      icon: <ShoppingCartIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Your Earning",
      href: "#",
      icon: <DollarSignIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "profile",
      href: "#",
      icon: <UserPenIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        "mx-auto flex   flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen w-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  )
}
export const Logo = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" whitespace-pre text-black dark:text-white font-sans font-bold "
      >
        NoteNest
      </motion.span>
    </a>
  )
}
export const LogoIcon = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  )
}


const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex w-full flex-row gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <FileUpload />
        <CardWithForm />
      </div>

    </div>

  )
}
