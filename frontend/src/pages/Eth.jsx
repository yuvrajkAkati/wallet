import { Ethereum } from "./Ethereum";
import { generateMnemonic ,mnemonicToSeed, mnemonicToSeedSync } from "bip39";
import { Wallet , HDNodeWallet } from "ethers";
import { useState , useEffect } from "react";

export function Eth (){
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
       <Ethereum mnemonics={mnemonics} wally={wally} onClick={()=>{
        
        const seed = mnemonicToSeedSync(mnemonics)
        const derivationPath = `m/44'/60'/${count}'/0'`
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        const publicKey = wallet.address
        console.log(hdNode);
        
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
      
      ></Ethereum>
      <button onClick={deleteWallet}></button>
       </div>
       </div>
    )
}