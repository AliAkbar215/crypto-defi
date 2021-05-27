
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { Input, TextField } from '@material-ui/core';

import Web3 from "web3";
import Envirnment from '../../util/environment';
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "10rem",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #F1E2D7',

    outline: "none",
    width: 400,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "2rem"
  },
  // paper: {
  //   "&:focus": {
  //     outline: "none",
  //     backgroundColor: "white"
  //   }
  // }
}));


export default function Selling({ Useraccount, threeContract, tokenContract }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(0)
  const [getbnb, setgetbnb] = React.useState(0)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const ChangeHandler = (e) => {

    // console.log(amount.toLocaleString('fullwide', { useGrouping: false }))
    if (threeContract !== undefined && Useraccount !== undefined && e.target.value !== "") {
      if (e.target.value > -1) {
        let amount = web3.utils.toWei(e.target.value)
        setValues(amount)
        if (amount > -1) {
          threeContract.methods.watch2(amount ? amount : 0).call()
            .then((val) => {

              setgetbnb(web3.utils.fromWei(val))

            })
        }
      }
    }
  }

  const SEELBNB = () => {
    if (threeContract !== undefined && Useraccount !== undefined) {

      if (values !== 0) {
        console.log(values, Useraccount)

        tokenContract.methods.approve(Envirnment.contractThree, values).send({
          from: Useraccount,
          gas: 2100000,
        }).then((res) => {
          threeContract.methods.sellTokens(values).send({
            from: Useraccount,
            gas: 2100000,

          })

        })



      }
    }
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleOpen} style={{ backgroundColor: "#A8936C", color: "white" }}>
        Selling
      </Button>

      <Modal
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
            <Button style={{ float: "right", fontWeight: 900 }} onClick={handleClose}>X</Button>
            <br />
            <h3 id="transition-modal-title" style={{ textAlign: "center", fontSize: "2rem", fontFamily: 'Anton , sans-serif', color: "#314573", textShadow: "2px 1px 2px   #000000", }}>SELLING EDR</h3>
            <div id="transition-modal-description">

              <TextField label="Token" placeholder="Enter trx" fullWidth onChange={ChangeHandler} type="number" />
            </div>
            <br />
            <div id="transition-modal-description">

              <TextField label="BNB" placeholder="Recieve token" fullWidth value={parseFloat(getbnb).toFixed(5)} />
            </div>


            <br />
            <Button fullWidth disableElevation style={{ backgroundColor: "#A8936C", color: "white" }} onClick={SEELBNB}  > SELL</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}