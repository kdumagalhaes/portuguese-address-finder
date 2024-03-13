import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp"
 const PostalCodeInput = () => {

  return (
    <InputOTP
    maxLength={7}
    pattern={REGEXP_ONLY_DIGITS}
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