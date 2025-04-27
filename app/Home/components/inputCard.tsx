import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function CardWithForm() {
  // State to store the form input values
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [title, setTitle] = useState("")

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault() // Prevent the default form submission behavior

    // Create the note data object
    const noteData = {
      title,
      subject,
      description,
      price,
    }

    try {
      // Send the data to the backend
      const response = await axios.post(
        `https://notenest-backend-4y2l.onrender.com/api/notes/upload`,
        noteData
      )

      // Handle success logic (e.g., showing a success message, resetting the form, etc.)
      console.log("Note uploaded successfully:", response.data)

      // Optional: Reset the form fields after successful submission
      setTitle("")
      setSubject("")
      setDescription("")
      setPrice("")

      // Optionally, you can show a success message or redirect the user to another page.

    } catch (error) {
      // Handle error logic (e.g., showing an error message)
      console.error("Error uploading note:", error)
    }
  }

  return (
    <Card className="w-1/2 border-neutral-800 h-[450px]">
      <CardHeader>
        <CardTitle>Create Note</CardTitle>
        <CardDescription>Upload your study notes for sale.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            {/* Title input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter title"
                className="border-neutral-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Subject input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter subject"
                className="border-neutral-800"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Description input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                className="border-neutral-800"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Price input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                className="border-neutral-800"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Publish button */}
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="text-black font-sans font-bold border-neutral-800 bg-white"
              type="submit" // This ensures that the form is submitted when the button is clicked
            >
              Publish
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
