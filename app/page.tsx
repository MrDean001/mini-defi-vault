import NavBar from "@/components/NavBar";
import VaultBalance from "@/components/VaultBalance";
import UserBalance from "@/components/UserBalance";
import Deposit from "@/components/Deposit";
import Withdraw from "@/components/Withdraw";
import TransactionHistory from "@/components/TransactionHistory";

export default function Home(){
  return (
    <>
    <NavBar />
    <main className="mx-auto max-w-7xl space-y10 p-8">
      <section>
        <h1 className="text-4xl font-bold">
          Welcome to Mini Defi Vault
        </h1>
        <p className="mt-2 text-gray-600">
          Deposit ETH securely into our decentralized vault and withdraw it whenever you need it.
        </p>
      </section>
      <section className="grid gap-6 md:grid-col-2">
        <VaultBalance />
        <UserBalance />
      </section>
      <section id="deposit" className="grid gap-6 md:grid-cols-2">
        <Deposit />
        <div id="withdraw">
          <Withdraw />
        </div>
      </section>
      <section id="history">
        <TransactionHistory />
      </section>
    </main>
    </>
  )
}