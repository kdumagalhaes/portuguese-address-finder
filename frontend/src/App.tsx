import Address from './components/Address/Address'
import PostalCodeInput from './components/PostalCodeInput/PostalCodeInput'
import { AddressProvider } from './context/AddressContext'

function App() {

  return (
    <div className="h-screen flex items-center  flex-col gap-6">
        <AddressProvider>
        <PostalCodeInput />
        <Address />
      </AddressProvider>
      </div>
  )
}

export default App
