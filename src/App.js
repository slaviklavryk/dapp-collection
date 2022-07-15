import './App.css';
import {ethers} from "ethers";
import { useState, useEffect } from 'react';
import { GiBirdClaw } from "react-icons/gi";

function App() {
  const [account, setAccount] = useState("");

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined"){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      console.log("Please install Metamask");
    }
  };

  useEffect(() => {
    initConnection();
  }, []);

  return (
    <div className="page">
      <div className="header">
        <img src={require('./assets/images/logo.jpg')} className="artIcon"/>
        <p>
          11/15
          <span>
            <GiBirdClaw style={{marginLeft: "5px"}}/>
          </span>
        </p>
        {account == "" ? (
          <button onClick={initConnection} className="button">Connect</button>
        ) : (
          <p>...{account.substring(account.length - 7)}</p>
        )}  
      </div>
    </div>
    
  );
}

export default App;
