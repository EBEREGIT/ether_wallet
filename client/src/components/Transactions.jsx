import React, { useContext } from "react";
import { Transaction } from "../context/Transaction";
import { shortenAddress } from "../utils/shortenAddress";

export const Transactions = () => {
  const { transactions, transactionCount } = useContext(Transaction);

  return (
    <main>
      <h2>All Transactions {transactionCount}</h2>

      {transactions && transactions.length ? (
        transactions.map((transaction, index) => (
          <aside className="card" key={index}>
            <p>Sender: {shortenAddress(transaction.addressFrom)}</p>
            <p>Receiver: {shortenAddress(transaction.addressTo)}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Time: {transaction.timestamp}</p>
            <p>Message: {transaction.message}</p>
            <p>Keyword: {transaction.keyword}</p>
          </aside>
        ))
      ) : (
        <p>No Transactions Found</p>
      )}
    </main>
  );
};
