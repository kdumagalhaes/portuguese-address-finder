import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp"
import { useEffect, useState } from "react"

interface PostalCode {
  firstPart: string,
  secondPart: string
}

const BASE_URL = "http://localhost:3000/api/search-address?cep="
 const PostalCodeInput = () => {
 const [postalCodeInput, setPostalCodeInput] = useState("")

 const normalizePostalCode = (postalCodeValue: string) => {
      const firstPart = postalCodeValue.slice(0, 4)
      const secondPart = postalCodeValue.slice(4, 7)
      fetchPostalCode({firstPart, secondPart})
 }

 const fetchPostalCode = async (postalCode: PostalCode) => {
      const response = await fetch(`${BASE_URL}${postalCode.firstPart}-${postalCode.secondPart}`);
      const data = await response.json();
      console.log("data = ", data)
 }

 useEffect(() => {
  if (postalCodeInput.length === 7) {
    normalizePostalCode(postalCodeInput)
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [postalCodeInput])


  return (
    <InputOTP
    maxLength={7}
    pattern={REGEXP_ONLY_DIGITS}
    onChange={(value) => setPostalCodeInput(value)}
    autoFocus
    render={({ slots }) => (
      <>
        <InputOTPGroup>
          {slots.slice(0, 4).map((slot, index) => (
            <InputOTPSlot key={index} {...slot} />
          ))}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          {slots.slice(4).map((slot, index) => (
            <InputOTPSlot key={index + 4} {...slot} />
          ))}
        </InputOTPGroup>
      </>
    )}
  />
  )
}

export default PostalCodeInput