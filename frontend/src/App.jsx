import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import SecretPhase from './components/ui/SecretPhase'
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { Topbar } from './components/ui/Topbar';
import { Solana } from './pages/Solana';
import bs58 from 'bs58'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";





function App() {
  const [mnemonics , setMnemonics] = useState("")
  const [publicKeys , setPublicKeys] =  useState([])
  const [privateKeys, setPrivateKeys] = useState([])
  const [count , setCount] = useState(1)
  const [ r ,setr] = useState([])
  const [wally , setWally] = useState([{
    id : "",
    public_key : "",
    private_key : ""
  }])
  
  useEffect(()=>{
    const mnemonics = generateMnemonic()
    setMnemonics(mnemonics)
  },[])
  return (
    <Solana mnemonics={mnemonics} wally={wally} onClick={()=>{
      
      const seed =mnemonicToSeedSync(mnemonics)
      const path = `m/44'/501'/${count}'/0'`
      
      const derivedSeed = derivePath(path, seed.toString("hex")).key
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
      const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58()
      
      function uint8ArrayToBase58(uint8Array) {
        return bs58.encode(uint8Array);
      }

      const byteArray = secret 
      const privateKey = uint8ArrayToBase58(byteArray);
      setCount(
        count+1
       )
       setWally([...wally,{
        id : count,
        public_key : publicKey,
        private_key : privateKey
       }])
   
    }}></Solana>
  )
}



export default App
