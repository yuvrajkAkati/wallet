import { useEffect, useState } from 'react'
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Solana} from './Solana'
import bs58 from 'bs58'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export function Sol(){
    const [mnemonics , setMnemonics] = useState("")
    const [count , setCount] = useState(1)
    const [wally , setWally] = useState([{
      id : "",
      public_key : "",
      private_key : ""
    }])
  
    useEffect(()=>{
      const mnemonics = generateMnemonic()
      setMnemonics(mnemonics)
    },[]) 
  
    const deleteWallet = wallet =>{
      setWally(wally.filter(walletItem => walletItem.id != wallet.id))
    }
  
    return (
      
      <div className='bg-white-500 dark:bg-black h-full '>
       <div className='px-28 pt-8 pb-8'>
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
         
      }}
      
      onClickDelete={()=>{
        setWally([{
          id : "",
          public_key : "",
          private_key : ""
        }])
        setCount(1)
      }}
      
      setCount={setCount}
  
      setWally={setWally}
  
      onClickDeleteIndividual={deleteWallet}
      
      ></Solana>
      <button onClick={deleteWallet}></button>
       </div>
       </div>
      
    )
  }