import AddBudgetForm from "../components/AddBudgetForm"
import AddTransactionForm from "../components/AddTransactionForm"
import BudgetSummary from "../components/BudgetSummary"
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline"


export default function Page() {
    return (
        <main>
            <div className="flex w-full justify-between">
                <div className="flex content-center">
                    <HomeIcon width={30}/>
                    <span className="text-4xl font-bold">Budgie</span>
                </div>
                {/* button for user profile: */}
                <div className="flex content-center"> 
                    <UserIcon width={25}/>
                    <span className="text-3xl font-bold">My Profile</span>
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
                

            </div>


            
        </main>
    )
}