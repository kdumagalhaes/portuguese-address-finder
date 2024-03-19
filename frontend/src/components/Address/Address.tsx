import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAddress } from "@/context/AddressContext"

const Address = () => {
  const {address, clearAddress} = useAddress()

  const hasAddress = Object.values(address).every((value) => value === "");

  return (
    !hasAddress && (
<>
<Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Morada</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{address.street}</p>
      <p>{address.local}</p>
    </CardContent>
  </Card>
  <Button onClick={() => clearAddress()}>Limpar</Button>
</>
  )
  )
}

export default Address