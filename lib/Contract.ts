" use client";

import { ethers } from "ethers";
import { getProvider, getSigner } from "./web3";
import VaultArtifacts from "@/contract/out/Vault.sol/Vault.json";

const contractAddress = process.env.NEXT_PUBLIC_VAULT_ADDRESS!;
const SEPOLIA_CHAIN_ID = 11155111;
const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL);

// Read-only contract
export function getVaultReadContract(){
    return new ethers.Contract(
        process.env.NEXT_PUBLIC_VAULT_ADDRESS!,
        VaultArtifacts.abi, 
        provider
    );
}

// Write Contract 
export async function getVaultWriteContract() {
    const signer = await getSigner();
    const network = await signer.provider!.getNetwork();
    if (Number(network.chainId) !== SEPOLIA_CHAIN_ID) {
        throw new Error ("Please switch Metamask to Sepolia.");
    }
    return new ethers.Contract(
        contractAddress,
        VaultArtifacts.abi,
        signer
    );
}