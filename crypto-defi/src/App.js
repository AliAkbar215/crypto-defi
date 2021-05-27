import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Mint from "./Components/Mint";
import Redeem from "./Components/Redeem";
import Savings from "./Components/Savings";
import Staking from "./Components/Staking";
import LpReward from "./Components/LPreward";
// import CustomDialogContent from './NotConnectedModal/index'
import { BrowserRouter as Router, Route, useHistory, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getUserData } from "./redux/action";

function App({ tokenContract, Useraccount, mincontract, threeContract }) {
  const [isConnect, setIsConnect] = React.useState("not done");
  const dispatch = useDispatch()

  const history = useHistory()

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#d7eaf1",

      },
      secondary: {
        main: "#31456A",

      },
    },
  });



  React.useEffect(() => {
    if (Useraccount !== undefined && mincontract !== undefined && tokenContract !== undefined) {
      setInterval(async () => {
        dispatch(getUserData(Useraccount, mincontract, tokenContract))
        // console.log(a, "1")
      }, 4000)

    }


  })


  React.useEffect(() => {
    if (window.location.href.includes("?ref=")) {

      let getAddress = window.location.href.split("?ref=")[1];
      console.log(getAddress, "getAddress")
      let final = getAddress.slice(0, 42);
      localStorage.setItem("MINT_ADD", final);
    }
  }, []);


  // React.useEffect(() => {
  //   alert('assets')
  //   fetch('https://tarmex.io/api/v1/assets', {
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },

  //   })
  //     .then((res) => res.json())
  //     .then(res => alert(JSON.stringify(res)))
  //     .catch(err => alert(JSON.stringify(err)))

  // }, [])

  // console.log("history", history)


  const checkConnection = async () => {
    // console.log("here is the tronweb===>", tronWeb);
    // let check = (await Useraccount) && mincontract;
    // if (check) {
    // setIsConnect("done");
    // } else {
    setIsConnect("not done");
    // /}
  };

  React.useEffect(() => {
    checkConnection();
  }, []);


  return (
    <>

      <ThemeProvider theme={theme}>
        {/* <Router> */}
        <Header />
        <Switch>

          <Route path="/dashboard/redeem">
            <Redeem />
          </Route>
          {/* <Route path="/dashboard/redeem" component={Redeem} /> */}
          <Route path="/dashboard/saving" component={Savings} />
          <Route path="/dashboard/staking" component={Staking} />
          <Route path="/dashboard/lpReward" component={LpReward} />
          <Route path="/">
            <Mint Useraccount={Useraccount} mincontract={mincontract} threeContract={threeContract} tokenContract={tokenContract} />
          </Route>

          {/* </Router> */}
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
