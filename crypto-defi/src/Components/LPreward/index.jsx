import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

/**
 * @author
 * @function LPrewards
 **/
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  imgStyle: {
    width: "44px",
  },
  pos: {
    marginTop: 10,
    marginBottom: 2,
    color: "blue",
    fontWeight: "bold",
  },
  cardHeading: {
    fontWeight: "bold",
    paddingTop: 10,
    color: theme.palette.secondary.main,
  },
  topHeading: {
    fontWeight: "bold",
    paddingTop: 15,
    color: theme.palette.secondary.main,
    fontSize: 25,
    marginBottom: 15,
  },
  imageBack: {
    boxShadow:
      "inset -2.35875px -2.35875px 7px #e8e8e8, inset 3.53813px 3.53813px 7.07626px hsl(0deg 0% 55% / 40%);",
    borderRadius: "50%",
    width: "72px",
    height: "72px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mintContainer: { marginBottom: 60, marginTop: 40 },
}));

const LPrewards = () => {
  const classes = useStyles();


  const [countTime, setCountDateTime] = React.useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });


  let interval = React.useRef();
  const contStartTimerStart = () => {
    let countDownDate = new Date('June 9,2021 00:00:00').getTime()

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
    <Container maxWidth="md" className={classes.mintContainer}>
      <div style={{ width: "100%", textAlign: "center" }}>
        {/* <Typography className={classes.topHeading}>Select a pool</Typography> */}
      </div>
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
      {/* <Grid container spacing={2}>
        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
     
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
       
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
         
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
        
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
        
          </Card>
        </Grid>
      </Grid>

      <div style={{ width: "100%", textAlign: "center" }}>
        <Typography className={classes.topHeading}>⚠️ Deprecated</Typography>
      </div>
      <Grid container spacing={2}>
        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
       
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          
          </Card>
        </Grid>

        <Grid lg={4} sm={6} xs={12} item>
          <Card className={classes.root}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={classes.imageBack}>
                  <img
                    src="https://app.dusd.finance/_nuxt/img/sushiswap-dfd-eth.87b75b8.svg"
                    alt="DefiDollar Balance pool"
                    className={classes.imgStyle}
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardHeading}
              >
                be nev o lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          
          </Card>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default LPrewards;
