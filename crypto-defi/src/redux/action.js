
import store from "./store";
import axios from "axios";
import { toast } from 'react-toastify';
import Envirnment from "../util/environment";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
export const getUserData = (Useraccount, mincontract, tokenContract) => async (dispatch) => {



 



  if (Useraccount && mincontract && tokenContract) {



    store.dispatch({
      type: "USER_WALLET_ADDRESS",
      payload: Useraccount,
    });

    store.dispatch({
      type: "MINT_CONTRACT",
      payload: mincontract
    })

    store.dispatch({
      type: "TOKEN_CONTRACT",
      payload: tokenContract
    })



    await mincontract.methods.owner().call()
      .then((val) => {
        // console.log(val)
        dispatch({
          type: "DEFAULT_ADDRESS",
          payload: val
        })
      });








    await mincontract.methods.users(Useraccount).call()
      .then((val) => {
        // console.log(val)
        dispatch({
          type: "DEPOSIT_AMOUNT",
          payload: web3.utils.fromWei(val.deposit_amount)
        })

      })

    // await mincontract.methods.payoutOf(Useraccount).call()
    //   .then((val) => {
    //     console.log(val, "payout_of")
    //     dispatch({
    //       type: "PAYOUT_OF",
    //       payload: web3.utils.fromWei(val.payout),
    //     });
    //   });



    // await mincontract.methods
    //   .payoutOf(Useraccount)
    //   .call()
    //   .then((val) => {
    //     console.log("HOLD_BOUNS", val)
    //     dispatch({
    //       type: "HOLD_BOUNS",
    //       payload: val._holdBonus,
    //     });
    //   });

    // // DIRECT_BONUS
    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        // console.log(val, "Direct Bouns===>")
        dispatch({
          type: "DIRECT_BOUNS",
          payload: web3.utils.fromWei(val.direct_bonus)
        })
      })


    await mincontract.methods.users(Useraccount)
      .call()
      .then((val) => {

        dispatch({
          type: "MATCHING_BOUNS",
          payload: web3.utils.fromWei(val.match_bonus)
        })
      })





    // //POOL_BONUS
    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {

        // console.log("getUserReferralBonus", val)
        dispatch({
          type: "POOL_BOUNS",
          payload: val.UniLevelBonus,
        });
      });



    // // // total_payouts
    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {



        dispatch({
          type: "TOTAL_PAYOUTS",
          payload: web3.utils.fromWei(val.total_payouts)
        })

      })
    // // // // //your getUserAvailable
    await mincontract.methods
      .total_deposited()
      .call()
      .then((val) => {

        store.dispatch({
          type: "GET_TOTAL_DEPOSITED",
          payload: web3.utils.fromWei(val),
        });
      });
    // // getContractBalance

    await mincontract.methods
      .getContractBalance()
      .call()
      .then((val) => {


        store.dispatch({
          type: "GET_CONTRACT_BALANCE",
          payload: web3.utils.fromWei(val)
        });
      });

    //Users upline
    await mincontract.methods
      .users(Useraccount)
      .call().then((val) => {


        store.dispatch({
          type: "GET_USER_UPLINES",
          payload: val.upline,
        });
      })




    // // //  // //goovernance
    await mincontract.methods
      .goovernance(Useraccount)
      .call()
      .then((val) => {

        dispatch({
          type: "GOVERNANCE_GOLABAL",
          payload: val,
        });

      });

    await mincontract.methods
      .goovernance(Useraccount)
      .call()
      .then((governences) => {
        let Designation;
        if (governences.rank5 === true) {

          Designation = "Rank5"
        } else if (governences.rank4 === true) {
          Designation = "Rank4"
        } else if (governences.rank3 === true) {
          Designation = "Rank3"

        }
        else if (governences.rank2 === true) {

          Designation = "Rank2"
        }
        else if (governences.rank1 === true) {
          Designation = "Rank1"
        }
        else {
          Designation = "Rank0"
        }
        dispatch({
          type: "DEIGNATION_S",
          payload: Designation
        })
      })

    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {

        dispatch({
          type: "REFERLLS",
          payload: val.referrals
        })
      })

    await mincontract.methods.pool_balance()
      .call()
      .then((val) => {


        dispatch({
          type: "POOL_BALNCE",
          payload: val
        })
      })


    await mincontract.methods.users(Useraccount)
      .call()
      .then((val) => {

        dispatch({
          type: "PESONAL_PARTNERS",
          payload: val.referrals
        })
      })
    await mincontract.methods.users(Useraccount)
      .call()
      .then((val) => {


        dispatch({
          type: "TOTAL_NUMBERS_OF_PARTNERS",
          payload: val.total_structure
        })
      })





    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {

        // console.log(val.deposit_time.toNumber(), "==========> oy na kr  yar ")
        dispatch({
          type: "DEPOSITS_TIME",
          payload: Number(val.deposit_time)
        })
      })



    await mincontract.methods.getunilvl(Useraccount)
      .call()
      .then((val) => {
        // console.log("Unileves", val)

        dispatch({
          type: "UNILEVELS_MMM",
          payload: val
        })
        // for (var i = 0; i < val.length; i++) {
        //   Unileves.push(val[i])
        // }
      })



    // console.log(Unileves, "Unileves")

    await mincontract.methods.total_users()
      .call()
      .then((val) => {

        dispatch({
          type: "TOTAL_USERS",
          payload: val
        })
      })
    //   //  getUserTotalDeposits



    //  total_deposits
    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {

        // console.log("this is the", val.total_deposits)
        dispatch({
          type: "GET_USER_TOTAL_DEPOSITS",
          payload: web3.utils.fromWei(val.total_deposits),
        })

      })


    //Note User pool_bonus
    await mincontract.methods
      .users(Useraccount)
      .call()
      .then((val) => {


        dispatch({
          type: "USER_POOL_BOUNS",
          payload: web3.utils.fromWei(val.pool_bonus)
        })
      })




    await mincontract.methods.pool_last_draw()
      .call()
      .then((val) => {

        dispatch({
          type: "POOL_LAST_WITHDAW_TIME",
          payload: Number(val)
        })
      })










    await tokenContract.methods.balanceOf(Useraccount)
      .call()
      .then((val) => {

        dispatch({
          type: "TOKEN_BALANCE",
          payload: web3.utils.fromWei(val)
        })
        // 


      })





  }

}







export const investFun = (userWalletAddress, amount, defaultAddress) => async (dispatch, getState) => {

  let getRefAddress = localStorage.getItem("MINT_ADD");
  let getDirectFromUrl;

  let url = window.location.href;

  if (url.includes("?ref=")) {
    let getAddress = url.split("?ref=")[1];
    let final = getAddress.slice(0, 42);
    getDirectFromUrl = final;
  }


  let refLink = getDirectFromUrl ? getDirectFromUrl : getRefAddress ? getRefAddress : defaultAddress

  // console.log(refLink, userWalletAddress, amount.toString())

  if (getState().UserReducer.MintContract && refLink) {

    try {

      let amou = amount * (1000000000000000000)
      getState().UserReducer.tokenContract.methods.approve(Envirnment.contractAddress, amou.toLocaleString('fullwide', { useGrouping: false })).send({
        from: userWalletAddress,
        gas: 2100000,
        gasPrice: 30000000000
      }).then(() => {

        // console.log(refLink, amou.toLocaleString('fullwide', { useGrouping: false }), "mintContract===>")

        getState().UserReducer.MintContract.methods.deposit(refLink, amou.toLocaleString('fullwide', { useGrouping: false }))
          .send({
            from: userWalletAddress,
            gas: 2100000,
            gasPrice: 30000000000

          }).then(() => {
            getUserData(userWalletAddress, getState().UserReducer.MintContract, getState().UserReducer.tokenContract);
          })

      })
    } catch (error) {

    }


  }


}



export const WithDrawStakeEarning = (userWalletAddress) => async (dispatch, getState) => {

  if (getState().UserReducer.MintContract) {
    getState().UserReducer.MintContract.methods
      .withdraw()
      .send({
        from: userWalletAddress, gas: 5000000,
        gasPrice: 30000000000
      })
      .then(() => {
        getUserData(userWalletAddress, getState().UserReducer.MintContract, getState().UserReducer.tokenContract);
      });

  }



};



































