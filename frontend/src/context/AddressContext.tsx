import { ReactNode, createContext, useContext, useState } from "react";

interface AddressProviderProps {
  children: ReactNode
}

interface AddressContextModel {
  address: Address,
  getAddress: (address: Address) => void,
  clearAddress: () => void
}

interface Address {
  street: string,
  local: string
}

const AddressContext = createContext({} as AddressContextModel)

export const AddressProvider = ({children}: AddressProviderProps) => {

  const [address, setAddress] = useState<Address>({street: "", local: ""})

  const getAddress = (address: Address) => {
    setAddress(address)
  }

  const clearAddress = () => {
    setAddress({street: "", local: ""})
  }

  const value = {
    getAddress,
    clearAddress,
    address
  }

  return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>

}

export const useAddress = () => {
  const context = useContext(AddressContext)

  if (context === undefined) {
    throw new Error('useAddress must be used within AddressContext')

  }

  return context
}