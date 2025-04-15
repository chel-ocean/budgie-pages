import AddBudgetForm from "../components/AddBudgetForm"
import AddTransactionForm from "../components/AddTransactionForm"
import BudgetSummary from "../components/BudgetSummary"
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline"
import TransactionTable from "../components/TransactionTable"
import Link from "next/link"


export default function Page() {
    return (
        <main className="dashboard">
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
            

            <h1>Welcome back, <span className="accent">(first name)</span></h1>
            <div className="grid-lg mb-10">
                <div className="flex-lg">
                    <AddBudgetForm />
                    <AddTransactionForm />
                </div>
                
                <h2>Existing Budgets</h2>
                <div className="budgets">
                    {/* {budgets.map((budget) => (<BudgetProfile key={budget.id} budget={budget} />))} */}
                    <BudgetSummary />
                </div>
                
                <h2>Recent Transactions</h2>
                <h4>Sort By: </h4>
                <TransactionTable />

            </div>


            
        </main>
    )
}