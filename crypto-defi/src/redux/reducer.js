let initState = {
  depositAmount: 0,
  tokenBalance: 0,
  payoutOf: 0,
  holdBouns: 0,
  //

  //


  userWalletAddress: "",

};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {


    case "MINT_CONTRACT":
      return {
        ...state,
        MintContract: payload
      }

    case "TOKEN_CONTRACT":
      return {
        ...state,
        tokenContract: payload
      }


    case "TOKEN_BALANCE":
      return {
        ...state,
        tokenBalance: payload,
      };

    case "DEPOSIT_AMOUNT":
      return {
        ...state,
        depositAmount: payload,
      };

    case "USER_POOL_BOUNS":
      return {
        ...state,
        userpoolbouns: payload,
      };


    // case "HOLD_BOUNS":
    //   return {
    //     ...state,
    //     holdBouns: payload
    //   }


    case "DIRECT_BOUNS":
      return {
        ...state,
        directbouns: payload
      }

    case "MATCHING_BOUNS":
      return {
        ...state,
        matchingbouns: payload
      }


    case "POOL_BOUNS":
      return {
        ...state,
        poolbouns: payload,
      };

    case "TOTAL_PAYOUTS":

      return {
        ...state,
        totalpayouts: payload
      }



    case "GET_TOTAL_DEPOSITED":
      return {
        ...state,
        totalDeposited: payload,
      };

    case "USER_WALLET_ADDRESS":

      return {
        ...state,
        userWalletAddress: payload,
      };


    case "GET_CONTRACT_BALANCE":
      return {
        ...state,
        getContractBalance: payload
      }


    case "GET_USER_UPLINES":
      return {
        ...state,
        getUserUplines: payload
      }

    case "GOVERNANCE_GOLABAL":
      return {
        ...state,
        governence: payload
      }
    case "DEIGNATION_S":
      return {
        ...state,
        designation: payload
      }
    case "REFERLLS":
      return {
        ...state,
        refferals: payload
      }


    case "GET_USER_TOTAL_DEPOSITS":
      return {
        ...state,
        totalDeposites: payload
      }

    case "DEPOSITS_TIME":
      return {
        ...state,
        depositsTime: payload
      }

    case "POOL_LAST_WITHDAW_TIME":
      return {
        ...state,
        poollsttimem: payload
      }

    case "POOL_BALNCE":
      return {
        ...state,
        poolbalance: payload
      }
    case "PESONAL_PARTNERS":
      return {
        ...state,
        personalPartners: payload
      }


    case "TOTAL_NUMBERS_OF_PARTNERS":
      return {
        ...state,
        totaNumbersofPartnes: payload
      }

    case "UNILEVELS_MMM":
      return {
        ...state,
        unilevels: payload
      }

    case "TOTAL_USERS":
      return {
        ...state,
        totalUsers: payload
      }



    case "DEFAULT_ADDRESS":
      return {
        ...state,
        defaultAddress: payload
      }


    default:
      return state;
  }
};
