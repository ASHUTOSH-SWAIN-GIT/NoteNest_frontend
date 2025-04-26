import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CardWithForm() {
  return (
    <Card className="w-1/2 border-neutral-800 h-[400px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5 " >
              <Label htmlFor="name">Subject</Label>
              <Input id="name" placeholder="Enter subject " className="border-neutral-800"/>
            </div>
            <div className="flex flex-col space-y-1.5 " >
              <Textarea placeholder="description" className="border-neutral-800"/>
            </div>
            <div className="flex flex-col space-y-1.5 " >
              <Label htmlFor="name">Price</Label>
              <Input  placeholder="Enter Price " className="border-neutral-800"/>
            </div>
          
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-black font-sans font-bold border-neutral-800 bg-white">Publish</Button>
      </CardFooter>
    </Card>
  )
}
