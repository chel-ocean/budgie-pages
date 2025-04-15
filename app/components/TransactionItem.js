"use client";
import { useState } from "react";
import { PencilSquareIcon, ClipboardIcon, TrashIcon } from "@heroicons/react/20/solid";
import { formatCurrency, formatDate, getAllMatchingItems } from "../helpers";
import Link from "next/link";

// const TransactionItem = ({transaction, showBudget = true}) => {
const TransactionItem = () => {
    // const [isEditing, setIsEditing] = useState(false);
    // const [editedName, setEditedName] = useState(transaction.name);
    // const [editedAmount, setEditedAmount] = useState(transaction.amount);
    // const fetcher = useFetcher();
    // const budget = getAllMatchingItems({
    // category: "budgets",
    // key: "id",
    // value: transaction.budgetId
    // })[0];

    return (
        <>
            <td>
                {/* {isEditing ? ( //editing the title
                <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="edit-input"
                    required
                />
                ) : (
                transaction.name
                )} */}
                Transaction Name
            </td>
            <td>
                {/* {isEditing ? ( //editing the amount of money
                <input
                    type="number"
                    value={editedAmount}
                    onChange={(e) => setEditedAmount(e.target.value)}
                    className="edit-input"
                    step="0.01"
                    min="0.01"
                    required
                />
                ) : (
                formatCurrency(transaction.amount)
                )} */}
                {formatCurrency(20)}
            </td>
            <td>
                {/* {formatDate(transaction.createdAt)} */}
                {formatDate(Date.now())}                
            </td>
            
            <td>
                {/* {showBudget && (
                    <td>
                    <Link
                        to={`/budget/${budget.id}`}
                        style={{ "--accent": budget.color }}
                    >
                        {budget.name}
                    </Link>
                    </td>
                )} */}

                Budget name        
            </td>
            <td className="flex justify-center items-center gap-2 content-center">
                <button type="submit" className=" hover:bg-green-100 rounded-sm">
                    <PencilSquareIcon width={20} className="icon text-green-700 " />
                </button>
                <button className=" hover:bg-yellow-100 rounded-sm p-1">
                    <ClipboardIcon width={20} className="icon text-yellow-400"/>
                </button>
                <button>
                    <TrashIcon width={20} className="icon text-red-400" />
                </button>
            </td>
        </>
    );
};

export default TransactionItem;