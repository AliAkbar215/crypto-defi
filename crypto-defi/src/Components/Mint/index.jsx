import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
// import Radio from "@material-ui/core/Radio";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { investFun } from "../../redux/action";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import TransitionsModal from "../modal/Modal";
import { toast } from "react-toastify";
import Web3 from "web3";
import { useTranslation } from "react-i18next";
import Selling from "../SBmodals/Selling";
import Buying from '../SBmodals/Buying'
const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
/**
 * @author
 * @function Mint
 **/
const useStyles = makeStyles((theme) => ({
  usdcLogoStyle: {
    width: 28,
    height: 28
  },
  mintFirstCardContainerFor3rd: {
    color: theme.palette.secondary.main,
    display: "flex",

    // alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    // marginTop: 10,
    // marginBottom: 10,
    flexDirection: "column",
  },
  mintStaticContainer: {
    color: theme.palette.secondary.main,
    display: "flex",

    // alignItems: "center",
    justifyContent: "center",
    padding: 15,
    // marginTop: 10,
    // marginBottom: 10,
    flexDirection: "column",
  },
  mintFirstCardContainer: {
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    flexWrap: "wrap",
    // marginTop: 10,
    // marginBottom: 10,
  },
  copyInvi: {
    color: theme.palette.secondary.main,
  },
  mintContainer: { marginBottom: 60, marginTop: 20 },

  mintFirstCardInnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  minHeading: {
    // fontWeight: theme.typography.fontWeightBold,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: "Anton"
  },
  amountField: {
    marginLeft: 20,
  },
  amountStyle: {
    padding: ".5rem",
    fontSize: 12,
    // fontWeight: theme.typography.fontWeightBold,
  },
  dailyTimeCountDown: {
    // padding: ".5rem",
    fontSize: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 18
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },

  firstCardEnd: {
    display: "flex",
    alignItems: "center",
  },
  secondCardMintContainer: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    cursor: "pointer",
  },
  addmoreheading: {
    fontSize: 15,
    // fontWeight: theme.typography.fontWeightBold,
  },
  switchContainer: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
  },
  amountFieldFor3rd: {
    // width: 200,
  },
  Percent: {
    position: "absolute",
    right: 5,
  },
  percentVal: {
    fontSize: 14,

    paddingLeft: 20,
    paddingRight: 30,
  },
  bottom2Cards: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  dailyProfit: {
    fontSize: "2rem", fontFamily: 'Anton , sans-serif',
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  },
  statistics: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontFamily: "Anton"
  }

}));

const Mint = ({ Useraccount, mincontract, threeContract, tokenContract }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0)
  const [payout, setpayout] = useState(0)
  const [percent, percentSet] = useState(0)
  const [lang, setLang] = useState("en");
  const { i18n, t } = useTranslation();
  const [countTime, setCountDateTime] = React.useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });

  const dispatch = useDispatch()


  const state = useSelector(state => state.UserReducer)

  const { unilevels, depositsTime, userpoolbouns, totalUsers, totaNumbersofPartnes, personalPartners, governence, depositAmount, poollsttimem, defaultAddress, userWalletAddress, tokenBalance, totalDeposited, designation, totalDeposites, totalpayouts, getUserUplines, directbouns } = state




  React.useEffect(() => {
    if (mincontract && Useraccount) {
      setInterval(() => {

        mincontract.methods.payoutOf(Useraccount).call()
          .then((val) => {
            setpayout(web3.utils.fromWei(val.payout))

          })
      }, 500)

    }

  }, [Useraccount, mincontract, depositAmount]);





  React.useEffect(() => {
    let lang = localStorage.getItem("language");
    setLang(lang)
    i18n.changeLanguage(lang);
  }, []);




  let contInterval = React.useRef();

  const contTimeFunction = async () => {

    let geta = await Number(poollsttimem);

    if (geta != 0) {
      clearInterval(contInterval.current);
      let newone;
      newone = moment.unix(geta);
      const oneDay = 24 * 60 * 60 * 1000;
      const firstDate = geta && moment.unix(geta);
      const secondDate = geta && new Date();

      const getAlldays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
      if (newone) {

        let tomorrow = moment(newone).add(getAlldays + 1, "days");

        let check = new Date(tomorrow).getTime();

        contStartTimer(check);
      }

      return () => {
        clearInterval(contInterval.current);
      };
    }
  };



  const contStartTimer = countDownDate => {


    contInterval = setInterval(() => {

      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(contInterval.current);
      } else {


        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };




  React.useEffect(() => {

    if (poollsttimem) {
      contTimeFunction();
    }
  }, [poollsttimem]);













  // const querys = new URLSearchParams(window.location.search);
  // const refAddress = querys.get("ref");
  // const refAddresspasstoFunction = refAddress ? refAddress : defaultAddress



  // // console.log(refAddresspasstoFunction, "refAddresspasstoFunction")



  const MintAmount = async () => {



    if (+amount === 0) {

    } else if (+amount < 50) {

    } else if (+amount >= 100000) {

    }
    else {
      console.log(userWalletAddress, amount.toString(), defaultAddress, "userWalletAddress, amount, defaultAddress")
      dispatch(investFun(userWalletAddress, amount, defaultAddress))
    }

  }


  useEffect(async () => {
    // const headers = { 'Content-Type': 'application/json' }
    //   let getData = await axios.get(
    //     "https://tarmex.io/api/v1/assets");

    //   console.log("getData====>", getData)

  }, [])



  return (
    <Container
      maxWidth="md"
      className={`${classes.mintContainer} mintContainer`}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>

                  BUY EDR TOKEN
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  <Buying Useraccount={Useraccount} threeContract={threeContract} />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>

                  SELL EDR TOKEN
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  <Selling Useraccount={Useraccount && Useraccount} threeContract={threeContract && threeContract} tokenContract={tokenContract && tokenContract} />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>



        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer}>

              <Typography variant="h5" className={classes.addmoreheading} style={{ fontFamily: "Anton", textAlign: "left", alignItems: "left" }} >
                {t("designation.name")}........................
              </Typography>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography variant="h5" className={classes.addmoreheading}>
                {designation ? designation : "........"}
              </Typography>

            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer} style={{ display: "flex", flexWrap: "wrap" }}>

              <Typography className={classes.addmoreheading} style={{ fontFamily: "Anton", textAlign: "left", alignItems: "left" }} >
                {t("designation.limit")}:
              </Typography>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography className={classes.addmoreheading} style={{ fontFamily: "Anton", textAlign: "left", alignItems: "left" }} >
                {t("designation.directs")}:{unilevels ? 15 - unilevels[0] : 0}
              </Typography>
              <Typography className={classes.addmoreheading} style={{ fontFamily: "Anton", textAlign: "left", alignItems: "left" }} >
                {t("designation.2ndLevel")}:{unilevels ? 150 - unilevels[1] : 0}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.mintFirstCardInnerContainer}>
              <img
                src="logo.png"
                className={classes.usdcLogoStyle}
              />
              <Typography className={classes.minHeading}>
                EDINAR
              </Typography>
              <TextField
                className={classes.amountField}
                onChange={(e) => { setAmount(e.target.value) }}
                id="outlined-search"
                type="search"
                placeholder="amount"
                variant="outlined"
                value={amount}
              />
            </div>
            <br />
            <Typography>
              <TransitionsModal Useraccount={Useraccount} mincontract={mincontract} t={t} />
            </Typography>
            <div className={classes.firstCardEnd}>

              <Typography variant="h6" className={classes.amountStyle}>

                {tokenBalance}<br />
                {t("statistics.balance")}.
              </Typography>
              {/* <IconButton> */}
              <CloseIcon />
              {/* </IconButton> */}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer}>

              <Typography variant="h5" className={classes.addmoreheading}>
                {t("Referrer.reffer")} &nbsp; {" "}{getUserUplines ? getUserUplines.slice(0, 7) + "..." + getUserUplines.slice(28, 35) : "...."}
              </Typography>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography variant="h5" className={classes.addmoreheading}>
                {t("Referrer.referralbonus")}  &nbsp; {" "}{directbouns}
              </Typography>

            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.switchContainer}>
              <div>
                <Typography className={classes.dailyProfit} >
                  {t("dailyprofilt.dailyprofit")} - {payout ? payout : 0}
                </Typography>
              </div>
              <div>
                <Switch
                  // checked={state.checkedA}
                  // onChange={handleChange}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
            </div>
            <div
              className="thirdCardContainer"
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5" className={classes.addmoreheading}>
                  {t("dailyprofilt.dailyIncome")}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* <div className={classes.percentVal}>
                  <FormControlLabel
                    value="female"
                    checked
                    control={<Radio />}
                  />
                  1%
                </div> */}
                {/* <div className={classes.percentVal}>
                  <FormControlLabel
                    value="female"
                    checked
                    control={<Radio />}
                  />
                  0.5%
                </div> */}
                <TextField
                  className={classes.amountFieldFor3rd}
                  // id="outlined-search"
                  // type="search"
                  placeholder="amount"
                  variant="outlined"
                  value={percent}
                  onChange={(e) => percentSet(e.target.value)}
                />
                <div className={classes.Percent}>{percent * 1 / 100}%</div>
              </div>
            </div>
          </Paper>
        </Grid>


        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.minHeading}>
                  EDINAR
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {totalDeposites}<br />
                  {t("statistics.balace")}
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.minHeading}>
                  EDINAR
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {totalpayouts ? totalpayouts : 0}<br />
                  {t("statistics.mintAmount")}
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} className={classes.copyInvi}>
          <Paper style={{ display: "flex", padding: ".5rem", justifyContent: "space-between" }}  >

            <Typography variant="h5" className={classes.statistics} style={{ fontFamily: "Anton" }}>
              {t("copy.copylink")}
            </Typography>
            <CopyToClipboard
              text={window.location.origin + "/?ref=" + userWalletAddress}
              onCopy={() => toast.success("Link Copied!")}
            >
              <Button variant="outlined">{t("copy.copys")}</Button>
            </CopyToClipboard>
          </Paper>

        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer}>

              <Typography variant="h5" className={classes.addmoreheading} style={{ fontFamily: "Anton" }}>
                {t("OrganisationStatistics.Organisation")} &nbsp;
              </Typography>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography variant="h5" className={classes.addmoreheading}>
                {t("OrganisationStatistics.Personalinv")} &nbsp; {" "}{personalPartners ? personalPartners : 0}
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.totalNumberofPartners")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {totaNumbersofPartnes ? totaNumbersofPartnes : 0}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.TotalCommunityofPartners")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {totalUsers ? totalUsers : 0}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mintStaticContainer}>

            <Typography variant="h5" className={classes.statistics} style={{ fontFamily: "Anton" }}>
              {t("statistics.Statistics")}
            </Typography>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer}>
              <div style={{ display: "flex", height: "auto", padding: "auto", }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />&nbsp;&nbsp;
                <Typography variant="h5" className={classes.addmoreheading} style={{ paddingTop: ".2rem" }}>
                  {t("statistics.Systempartnershipbouns")} &nbsp;
              </Typography>
              </div>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography variant="h5" className={classes.addmoreheading}>
                {" "}{userpoolbouns ? userpoolbouns : 0}  &nbsp;
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.mintFirstCardContainer}>
            <div className={classes.secondCardMintContainer}>

              <Typography variant="h5" className={classes.addmoreheading}>
                {t("statistics.Deposit Time")}  &nbsp;
              </Typography>
              {/* <FormControlLabel value="female" checked control={<Radio />} /> */}
              <Typography variant="h5" className={classes.addmoreheading}>
                {" "}{depositsTime ? moment.unix(depositsTime).format("MMM Do YY") : 0}  &nbsp;
              </Typography>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />

                <Typography variant="h6" className={classes.amountStyle} >
                  {t("statistics.DailyPoolTimeCountDown")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.dailyTimeCountDown} >
                  {`${countTime.time_days + ":" + countTime.time_Hours + ":" + countTime.time_Minusts + ":" + countTime.time_seconds}`}<br />
                </Typography>


              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />

                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.RANK1")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>

                  {governence ? governence.rank1s : '...'}<br />
                </Typography>



              </div>
            </div>
          </Paper>
        </Grid>


        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.RANK2")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {governence ? governence.rank2s : '...'}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.RANK3")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {governence ? governence.rank3s : '...'}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.RANK4")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {governence ? governence.rank4s : '...'}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} sm={12}>
          <Paper className={classes.mintFirstCardContainerFor3rd}>
            <div className={classes.bottom2Cards}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="logo.png"
                  className={classes.usdcLogoStyle}
                />
                <Typography variant="h5" className={classes.amountStyle}>
                  {t("statistics.RANK5")}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountStyle}>
                  {governence ? governence.rank5s : '...'}<br />
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid xs={12} style={{ textAlign: "center", marginTop: 20 }}>
          <button class="btn outer-shadow mint ps-24 d-flex justify-content-center" onClick={MintAmount}>
            <span class="align-self-center">
              {t("statistics.butonmint")}
            </span>
          </button>
        </Grid>
      </Grid>
    </Container >
  );
};

export default Mint;
