"use client"
import { useState } from "react"
import { FileUpload } from "@/components/ui/file-upload"

export default function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([])
  const handleFileUpload = (files: File[]) => {
    setFiles(files)
    console.log(files)
  }

  return (
    <div className=" w-1/2 min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  )
}
