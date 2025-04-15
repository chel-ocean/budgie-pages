"use client"
import { useState, useEffect, useRef } from "react"

const AddBudgetForm = () => {

    return (    
        <div className="form-wrapper">
            <h2>Create Budget Profile</h2>
            <form className="grid-sm">
                <div className="grid-xs">
                    <label>Budget Profile Name</label>
                    <input
                        type="text"
                        name="newBudgetName"
                        id="newBudgetName"
                        placeholder="Enter budget name"
                        required
                    ></input>
                </div>
                <div className="grid-xs">
                    <label>Budget Limit</label>
                    <input
                        type="number"
                        step="0.01"
                        name="newBudgetLimit"
                        id="newBudgetLimit"
                        inputMode="decimal"
                        min="0.01"
                        placeholder="Enter budget limit"
                        required
                    ></input>
                </div>
                <div> 
                    {/* for toastify */}
                    <input 
                        type="hidden" 
                        name="_action" 
                        value="createBudget"
                    ></input>
                </div>
                <button
                    type="submit"
                    className="btn btn--primary"
                >Create Budget</button>
            </form>
        </div>
        )
}

export default AddBudgetForm