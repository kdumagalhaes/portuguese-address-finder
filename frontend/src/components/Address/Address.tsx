import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Address = () => {
  return (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Morada</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
  </Card>
  )
}

export default Address