import React, { useContext } from "react";
import { Transaction } from "../context/Transaction";
import { shortenAddress } from "../utils/shortenAddress";

const Header = () => {
  const { connectWallet, currentAccount } = useContext(Transaction);

  return (
    <header>
      <h1>BlockChain Tut</h1>

      {currentAccount ? (
        <p>Welcome {shortenAddress(currentAccount)}</p>
      ) : (
        <button onClick={() => connectWallet()}>Connect Account</button>
      )}
    </header>
  );
};

export default Header;
