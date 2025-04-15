import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers";
import Link from "next/link";

//const BudgetProfile = ({budget, showDelete = false}) => {
const BudgetSummary = () => {
    // const {id, name, amount, color} = BudgetSummary;
    // const spent = calculateSpentByBudget(id);


    const name = "Budget Name";
    const spent = 500;
    const amount = 1000;
    const remaining = amount - spent;
    const percentage = spent/amount;
  

    return (
        <div className="budget" style={{"--accent": "146, 39%, 50%"}}>
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            
            <progress max={amount} value={spent} className="">
                {formatPercentage(percentage)} 
            </progress>
            
            <div>
                {remaining < 0 ? (
                    <div className="progress-text text-red-400">
                        <small>{formatCurrency(spent)} spent</small>
                        <small>{formatCurrency(-remaining)} over budget</small>
                        
                    </div>
                ) : (
                    <div className="progress-text">
                        <small>{formatCurrency(spent)} spent</small>
                        <small> {formatCurrency(remaining)} remaining</small>
                    
                    </div>
                )}
            </div>
            {/* {
                showDelete ? (
                    <div className="flx-sm">
                        <form
                            onSubmit={(e) => {
                                if (!confirm("Are you sure you want to delete this Budget Profile?")) {
                                    e.preventDefault();
                                }
                            }}>
                            <button type="submit" className="btn btn--warning">
                                <span>Delete Budget</span>
                                <TrashIcon width={20} />
                            </button>
                        </form>
                        
                    </div>
                ) : (
                    <div className="flex-sm">
                        <Link to={`/budget/${id}`} className="btn"> 
                            <span>View Details</span>
                            <BanknotesIcon width={20} />
                        </Link>
                    </div>
                )
            } */}
            <div className="flex-sm">
                <Link href="/budgetprofile" className="btn"> 
                    <span>View Details</span>
                </Link>
            </div>

        </div>
    )

}
export default BudgetSummary