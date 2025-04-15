import AddTransactionForm from "../components/AddTransactionForm";
import BudgetSummary from "../components/BudgetSummary";
import TransactionTable from "../components/TransactionTable";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AddChart from "../components/AddChart";
import ImportPDF from "../components/ImportPDF";

export default function Page() {
    return (
        <main>
            <div className="flex w-full justify-between">
                <div >
                    <Link href="/dashboard" className="flex items-center text-4xl">
                        <HomeIcon width={30}/>
                        <span className="text-4xl font-bold">Budgie</span>
                    </Link>
                </div>
                <div>
                    <Link href="/userprofile" className="flex items-center text-4xl">
                        <UserIcon width={25}/>
                        <span className="text-3xl font-bold">My Profile</span>
                    </Link>
                </div>
            </div>

            <div className="grid-lg" style={{"--accent": "146, 39%, 50%"}}>
                <h1><span className="accent">
                    {/* {budget.name} */}
                    Budget Name</span> Overview</h1>
                <div className="flex-lg">
                    <div className="flex-col">
                        {/* <BudgetProfile budget={budget} showDelete={true} />
                        <AddTransactionForm budgets={[budget]} /> */}
                        <BudgetSummary />
                        <ImportPDF />
                    </div>
                    <AddTransactionForm />
                </div>
                

                {/* {transactions?.length > 0 ? (
                <div className="grid-md">
                    <h2>
                        <span className="accent">{budget.name}</span> Transactions
                    </h2>
                    <Table transactions={transactions} showBudget={false} />
                    <div>
                        <AddChart />
                    </div>
                </div>
                ) : (
                    <div className="flex justify-center">
                        <p>No transactions yet</p>
                    </div>
                    
                )} */}
                <div>
                    <h2>Transaction History</h2>
                    <h4>Sort By: </h4>
                    <TransactionTable />
                </div>
            </div>
        </main>

        
    )
}