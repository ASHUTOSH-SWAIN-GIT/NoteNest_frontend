"use client"
import { useState } from "react"
import { FileUpload } from "@/components/ui/file-upload"

export default function FileUploadDemo() {
 

  return (
    <div className=" w-1/2 h-[400px] border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload  />
    </div>
  )
}
