
const AddTransactionForm = () => { 
    return (
        <div className="form-wrapper ">
            <h2>Add New Transaction</h2>
            <form className="grid-sm ">
                <div className="grid-xs">
                    <label>Transaction Name</label>
                    <input 
                        type="text"
                        name="newTransactionName"
                        id="newTransactionName"
                        placeholder="Enter transaction name"
                        required />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newTransactionAmount">Amount</label>
                    <input 
                        type="number"
                        step="0.01"
                        inputMode="decimal"
                        name="newTransactionAmount"
                        id="newTransactionAmount"
                        placeholder="Enter transaction amount"
                        required />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newTransactionDate">Date</label>
                    <input 
                        type="date"
                        name="newTransactionDate"
                        id="newTransactionDate"
                        required />
                </div>
                
                <div className="grid-sm">
                {/* <div className="grid-sm" hidden={budgets.length === 1}> */}
                    <label htmlFor="newTransactionBudget">Budget Profile</label>
                    <select 
                        name="newTransactionBudget" 
                        id="newTransactionBudget" 
                        required>
                        {/* {budgets.sort((a, b) => a.createdAt - b.createdAt).map((budget) => {
                            return (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            )
                        })} */}
                    </select>
                </div>
                <input type="hidden" name="_action" value="createTransaction"/>
                <button 
                    type="submit" 
                    className="btn btn--primary"
                >Create Transaction</button>
            </form>
        </div>
    )
}

export default AddTransactionForm