"use client";

import { useState } from "react";
import { getVaultWriteContract } from "@/lib/Contract";

export default function Withdraw(){
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleWithdraw = async()=> {
        try{
            setLoading(true);
            setStatus("Connecting to contract...");
        const contract = await getVaultWriteContract();
        setStatus("Waiting for wallet confirmation...");
        const tx = await contract.withdraw();
        setStatus("Transaction submitted...");
        await tx.wait();
        setStatus("Withdraw successful!");
        } catch (error: any) {
            console.error(error);
            if (error.shortMessage) {
                setStatus(error.shortMessge);
            } else if (error.reason) {
                setStatus(error.reason);
            } else if (error.message) {
                setStatus(error.message);
            } else {
                setStatus("Transaction failed.");
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="max-w-md rounded-Lg border bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">
                Withdraw ETH 
            </h2>
            <p className="mb-4 text-gray-600">
              Withdraw your entire vault balance
              </p>
              <button onClick={handleWithdraw} disabled={loading}
              className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:bg-green-400">
                {loading ? "Withdrawing..." : "Withdraw"}
              </button>
                {status && (
                    <p className="mt-4 text-sm text-gray-700">
                        {status}
                    </p>    
                )}
        </div>
     );
}   