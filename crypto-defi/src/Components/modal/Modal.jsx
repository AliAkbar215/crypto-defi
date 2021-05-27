import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { WithDrawStakeEarning } from '../../redux/action';
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
// import { environment } from '../../util/enviormet';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "scroll",
    // border: '2px solid #5452E6',

  },
  paper: {
    backgroundColor: "#F1E2D7",
    // border: '2px solid #5452E6',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "auto"
    }
  },
  inputField: {
    padding: "8px",
    width: "80%",
    marginBottom: "32px",
    // background: "#182015",
    color: "#afcb4e",
    border: "1px solid grey"
  },
  gridd: {

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: " center",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "8px"
  },
  modalContent: {
    textAlign: "center",
    alignItems: "center"
  }
}));

export default function TransitionsModal({ Useraccount, mincontract, t }) {
  const classes = useStyles();
  const [payout, setpayout] = React.useState(0)
  const [open, setOpen] = React.useState(false);
  const state = useSelector(state => state.UserReducer)
  const { userWalletAddress, holdBouns, directbouns, matchingbouns,
    totalpayouts,
    depositAmount,
    refferals, totalDeposites,
    unilevels, totaNumbersofPartnes
  } = state

  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const withdraw = async () => {


    dispatch(WithDrawStakeEarning(userWalletAddress));


  }



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







  return (
    <div>
      <Button type="button" size="small" variant="outlined" onClick={handleOpen} style={{ backgroundColor: "#A8936C", color: "white" }}>
        <Typography>{t("statistics.Statistics")}</Typography>
      </Button>
      <Modal
        // disablePortal
        disableEnforceFocus
        disableAutoFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>

              <Typography> <Button onClick={handleClose}  >X</Button>  </Typography>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Typography align="center">{t("statistics.statics")}</Typography>

            </Box>
            <br />
            <Box className={classes.modalContent}>
              <input type="text" name="" value="" placeholder={`${userWalletAddress ? userWalletAddress.slice(0, 5) + "......." + userWalletAddress.slice(30, 38) : "Connect to your Wallet app..."}`} className={classes.inputField} style={{ width: "100%" }} />
              <Typography>{t("wallet.connect")}</Typography>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  {/* {console.log(holdBouns, "holdBouns=====>")} */}
                  <p>{t("wallet.yourCurent")}</p>
                  {/* {holdBouns ?? (+holdBouns) + 1} */}
                  <h2>1%</h2>
                </div>
                <div className="right_grid">
                  <p>{t("wallet.basicPr")}<span> 1%</span> </p>
                  {/* <p>Hold-bonus: <span>{holdBouns ? holdBouns : 0}%</span> </p> */}
                  {/* <p>Contract-bonus: <span> 0.00%</span> </p> */}
                </div>
              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  <p>{t("wallet.basicPr")}</p>
                  <Typography>{payout}</Typography>
                </div>
                <div className="right_grid">
                  <p>{t("wallet.Availaiblewith")}</p>
                  <Button variant="outlined" onClick={withdraw}>withdraw</Button>
                </div>

              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  <p>{t("wallet.TotalInvested")}</p>
                  <h3>{totalDeposites ? totalDeposites : 0}</h3>
                </div>
                <div className="right_grid">
                  <p>{t("wallet.NumberofDeposit")} </p>
                  <p>1</p>

                </div>
              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  <p>{t("wallet.TotalEarned")} </p>
                  <h2>{totalpayouts ? parseFloat(totalpayouts).toFixed(1) : 0}</h2>
                </div>
                <div className="right_grid">
                  <p>{t("wallet.TotalWIthdrawn")}</p>
                  <h2>{parseFloat(totalpayouts).toFixed(1)}</h2>
                </div>
              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  <p>{t("wallet.DirectReferral")}</p>
                  <h2>{refferals ? refferals : 0}</h2>
                </div>
                <div className="right_grid">
                  <p>{t("wallet.Teammembers")}</p>
                  <h2>{totaNumbersofPartnes ? totaNumbersofPartnes : 0}</h2>
                </div>
              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="left_grid">
                  <p>{t("wallet.ReferralRewards")}</p>
                  <h2>{directbouns ? directbouns : 0}</h2>
                </div>
                <div className="right_grid">
                  <p>{t("level.unilevelbouns")}</p>
                  <h2>{matchingbouns ? matchingbouns : 0}</h2>
                </div>

              </div>
            </Box>
            <Box>
              <div className={classes.gridd}>
                <div className="level">
                  <p>{t("level.0")}</p>
                  <h2>{unilevels ? unilevels[0] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.1")}</p>
                  <h2>{unilevels ? unilevels[1] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.2")}</p>
                  <h2>{unilevels ? unilevels[2] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.3")}</p>
                  <h2>{unilevels ? unilevels[3] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.4")}</p>
                  <h2>{unilevels ? unilevels[4] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.5")}</p>
                  <h2>{unilevels ? unilevels[5] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.6")}</p>
                  <h2>{unilevels ? unilevels[6] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.7")}</p>
                  <h2>{unilevels ? unilevels[7] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.8")}</p>
                  <h2>{unilevels ? unilevels[8] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.9")}</p>
                  <h2>{unilevels ? unilevels[9] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.10")}</p>
                  <h2>{unilevels ? unilevels[10] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.11")}</p>
                  <h2>{unilevels ? unilevels[11] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.12")}</p>
                  <h2>{unilevels ? unilevels[12] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.13")}</p>
                  <h2>{unilevels ? unilevels[13] : 0}</h2>
                </div>
                <div className="level">
                  <p>{t("level.14")}</p>
                  <h2>{unilevels ? unilevels[14] : 0}</h2>
                </div>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}











