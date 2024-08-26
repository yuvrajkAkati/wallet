import SecretPhase from '@/components/ui/SecretPhase';
import { Topbar } from '@/components/ui/Topbar';
import { Wallet } from '@/components/ui/Wallet';
import { WalletGenerator } from '@/components/ui/WalletGenerator';

export function Solana({mnemonics , onClick , wally , onClickDelete}){
    return (
        <div>
            <Topbar></Topbar>
            <SecretPhase mnemonics={mnemonics}></SecretPhase>
            <WalletGenerator wallet={"Solana wallet"} onClick={onClick} onClickDelete={onClickDelete}></WalletGenerator>
            <Wallet wally={wally}></Wallet>
        </div>
    )
}