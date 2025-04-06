import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                    <div className="slider-control">
                        <label>
                            <input
                                type="radio"
                                name="transactionType"
                                value="income"
                                onChange={() => setAmount(Math.abs(amount))}
                                defaultChecked
                            />
                            Income
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="transactionType"
                                value="expense"
                                onChange={() => setAmount(-Math.abs(amount))}
                            />
                            Expense
                        </label>
                    </div>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button disabled={amount === 0} className="btn">Add transaction</button>
            </form>
        </>
    );
}                