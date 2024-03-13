import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAddress } from "@/context/AddressContext"

const Address = () => {
  const {address} = useAddress()

const hasAddress = Object.values(address).every((value) => value === "");

  return (
    !hasAddress && (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Morada</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{address.street}</p>
      <p>{address.local}</p>
    </CardContent>
  </Card>
  )
  )
}

export default Address