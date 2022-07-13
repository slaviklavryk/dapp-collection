import './App.css';
import {ethers} from "ethers";
import { useState } from 'react';

function App() {
  const [account, setAccount] = useState(null);

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined"){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      console.log("Please install Metamask");
    }
  }

  return (
    <div>
      <button onClick={initConnection}>Connect</button>
      <p>{account}</p>
    </div>
    
  );
}

export default App;
