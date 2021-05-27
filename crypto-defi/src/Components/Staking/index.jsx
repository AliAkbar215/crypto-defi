import React from "react";
import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import { Typography, IconButton } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import CloseIcon from "@material-ui/icons/Close";
// import Radio from "@material-ui/core/Radio";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";
// import RadioGroup from "@material-ui/core/RadioGroup";

/**
 * @author
 * @function Staking
 **/

const useStyles = makeStyles((theme) => ({
  usdcLogoStyle: {
    width: 50,
  },
  mintFirstCardContainerFor3rd: {
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "column",
  },
  mintFirstCardContainer: {
    color: theme.palette.secondary.main,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  mintContainer: { marginBottom: 60, marginTop: 20 },

  mintFirstCardInnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  minHeading: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 25,
    paddingLeft: 10,
  },
  amountField: {
    marginLeft: 20,
  },
  amountStyle: {
    fontSize: 10,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "right",
  },
  amountCentered: {
    fontSize: 10,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
  },
  firstCardEnd: {
    display: "flex",
    alignItems: "center",
  },
  secondCardMintContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
  },
  addmoreheading: {
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
  },
  switchContainer: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
  },
  amountFieldFor3rd: {
    width: 100,
  },
  Percent: {
    position: "absolute",
    right: 5,
  },
  percentVal: {
    fontSize: 14,
    fontWeight: "bold",
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
  mintContainer: { marginBottom: 60, marginTop: 20 },
}));

const Staking = (props) => {
  const classes = useStyles();
  const [sVal, setSVal] = React.useState("Stake");
  const [countTime, setCountDateTime] = React.useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });


  let interval = React.useRef();
  const contStartTimerStart = () => {
    let countDownDate = new Date('April 25,2021 00:00:00').getTime()

    interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
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
    contStartTimerStart()
    return () => {

    }
  }, [])
  return (
    <Container
      maxWidth="md"
      className={`${classes.mintContainer} mintContainer`}
    >


      <div className="clock-container">
        <div className="clock-col">
          <p className="clock-day clock-timer">
            {countTime.time_days}
          </p>
          <p className="clock-label">
            Day
    </p>
        </div>
        <div className="clock-col">
          <p className="clock-hours clock-timer">
            {countTime.time_Hours}
          </p>
          <p className="clock-label">
            Hours
    </p>
        </div>
        <div className="clock-col">
          <p className="clock-minutes clock-timer">
            {countTime.time_Minusts}
          </p>
          <p className="clock-label">
            Minutes
    </p>
        </div>
        <div className="clock-col">
          <p className="clock-seconds clock-timer">
            {countTime.time_seconds}
          </p>
          <p className="clock-label">
            Seconds
    </p>
        </div>
      </div>


      {/* <Grid spacing={2}>
        <Grid item xs={12}>
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
                  <span style={{ fontSize: 30 }}>0</span>
                  <br />
                  Your DUSD saving balance
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
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
                <Typography variant="h6" className={classes.amountCentered}>
                  <span style={{ fontSize: 18 }}>52.686%</span>
                  <br />
                  Your DUSD saving balance
                </Typography>
              </div>
              <div>
                <Typography variant="h6" className={classes.amountCentered}>
                  <span style={{ fontSize: 18 }}>52.686%</span>
                  <br />
                  Your DUSD saving balance
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid xs={12}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={sVal}
            onChange={(e) => setSVal(e.target.value)}
          >
            <FormControlLabel value="Stake" control={<Radio />} label="Stake" />
            <FormControlLabel
              value="UnStake"
              control={<Radio />}
              label="UnStake"
            />
          </RadioGroup>
        </Grid>

        {sVal === "Stake" ? (
          <>
            <Grid item xs={12}>
              <Paper className={classes.mintFirstCardContainer}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={classes.mintFirstCardInnerContainer}>
                    <img
                      src="logo.png"
                      className={classes.usdcLogoStyle}
                    />
                    <Typography variant="h5" className={classes.minHeading}>
                      EDINAR
                    </Typography>
                    <TextField
                      className={classes.amountField}
                      id="outlined-search"
                      type="search"
                      placeholder="amount"
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.firstCardEnd}>
                    <Typography variant="h6" className={classes.amountStyle}>
                      0<br />
                      DUSD Balance
                    </Typography>
                  </div>
                </div>
                <div style={{ marginTop: 30 }}>
                  <Typography style={{ fontSize: 15 }}>
                    Please note that a
                    <span style={{ fontWeight: "bold" }}>0.5%</span> exit fee is
                    levied during the withdrawal
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.mintFirstCardContainerFor3rd}>
                <div
                  className={classes.switchContainer}
                  style={{ alignItems: "center" }}
                >
                  <div>
                    <Typography variant="h5" className={classes.addmoreheading}>
                      Infinite approval - trust DUSD Contract forever
                    </Typography>
                  </div>
                  <div>
                    <Switch
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>
                </div>
              </Paper>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Paper className={classes.mintFirstCardContainer}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={classes.mintFirstCardInnerContainer}>
                  <img
                    src="logo.png"
                    className={classes.usdcLogoStyle}
                  />
                  <Typography variant="h5" className={classes.minHeading}>
                    EDINAR
                  </Typography>
                  <TextField
                    className={classes.amountField}
                    id="outlined-search"
                    type="search"
                    placeholder="amount"
                    variant="outlined"
                  />
                </div>
                <div className={classes.firstCardEnd}>
                  <Typography variant="h6" className={classes.amountStyle}>
                    0<br />
                    Saving Balance
                  </Typography>
                </div>
              </div>
              <div style={{ marginTop: 30 }}>
                <Typography style={{ fontSize: 15 }}>
                  Please note that a
                  <span style={{ fontWeight: "bold" }}>0.5%</span> exit fee is
                  levied during the withdrawal
                </Typography>
              </div>
            </Paper>
          </Grid>
        )}

        <Grid xs={12} style={{ textAlign: "center", marginTop: 20 }}>
          {sVal === "Stake" ? (
            <button class="btn outer-shadow mint ps-24 d-flex justify-content-center">
              <span data-v-b3eb7e70="" class="align-self-center">
                STAKE
              </span>
            </button>
          ) : (
            <button class="btn outer-shadow mint ps-24 d-flex justify-content-center">
              <span data-v-b3eb7e70="" class="align-self-center">
                UNSTAKE
              </span>
            </button>
          )}
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Staking;
