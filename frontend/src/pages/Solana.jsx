import SecretPhase from '@/components/ui/SecretPhase';
import { Topbar } from '@/components/ui/Topbar';
import { Wallet } from '@/components/ui/Wallet';
import { WalletGenerator } from '@/components/ui/WalletGenerator';

export function Solana({mnemonics , onClick , publicKeys, privateKeys, count , r , wally}){
    return (
        <div>
            <Topbar></Topbar>
            <SecretPhase mnemonics={mnemonics}></SecretPhase>
            <WalletGenerator wallet={"Solana wallet"} onClick={onClick}></WalletGenerator>
            <Wallet wally={wally}></Wallet>
        </div>
    )
}