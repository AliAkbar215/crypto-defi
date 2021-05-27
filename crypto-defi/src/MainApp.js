import React, { useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  BrowserRouter as Router, Route,

} from "react-router-dom";
import App from './App';
// import CustomDialogContent from './NotConnectedModal/index.js'
import Web3 from "web3";
import txAbi from './util/contract/txAbi.json'
import tokenAbi from './util/contract/tokenAbi.json'
import AbiThree from './util/contract/abiThree.json'
import Envirnment from './util/environment';
import Home from './landingpage/Home';
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export default function MainApp() {

  const [tokenContract, setTokenContract] = React.useState()
  const [Useraccount, setAccount] = React.useState()
  const [mincontract, setMintContract] = React.useState()
  const [threeContract, setThreeContract] = React.useState()

  useEffect(() => {
    Ethereum();
    async function Ethereum() {
      window.ethereum && window.ethereum.enable();
      if (typeof window.ethereum !== "undefined") {
        let connectAccount = setInterval(async () => {
          // const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          if (account) {
            setAccount(account[0])

            const Contract = new web3.eth.Contract(
              txAbi,
              Envirnment.contractAddress
            );
            setMintContract(Contract)


            const TokenContract = new web3.eth.Contract(
              tokenAbi,
              Envirnment.tokenAddress
            )
            setTokenContract(TokenContract)

            const TokenThrid = new web3.eth.Contract(
              AbiThree,
              Envirnment.contractThree
            )
            setThreeContract(TokenThrid)


          }

          clearInterval(connectAccount);
        }, 500);
      }
    }
  }, [])

  // React.useLayoutEffect(() => {

  // }, []);

  let final
  const Init = async () => {
    //
    try {
      Ethereum();
      async function Ethereum() {
        window.ethereum.on("accountsChanged", (accounts) => {

          final = Web3.utils.toChecksumAddress(accounts[0]);
          setAccount(final)

        });
      }
    } catch (err) {

    }
  }

  React.useLayoutEffect(() => {

    Init()
  }, [final]);




  // console.log("tokenContract", tokenContract, "UserAccount", Useraccount, "mincontract", mincontract)


  return (
    <>

      <div>


        <ToastContainer />
        <Router>
          <Route exact path="/"><Home /></Route>
          <Route path="/dashboard">  <App tokenContract={tokenContract} Useraccount={Useraccount} mincontract={mincontract} threeContract={threeContract} /> </Route>
        </Router>
      </div>
    </>
  )
}
