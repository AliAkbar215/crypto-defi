import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Drawer from "./drawer";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerMainContainer: {
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  navLinksStyle: {
    fontSize: 17,
    fontWeight: theme.typography.fontWeightBold,
    // fontFamily:"Anton"
  },
  linkStyle: {
    textDecoration: "none",
    color: theme.palette.secondary.main,

  },
  navLinksContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  appBarStyle: {
    boxShadow: "none !important",
    paddingTop: 20,
    paddingBottom: 20,
  },
  appMobileView: {
    boxShadow: "none !important",
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  logoStyle: {
    width: "5rem",
    height: "5rem",
    [theme.breakpoints.down("md")]: {
      width: "4rem",
      height: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "3rem",
      height: "3rem",
    }
  }

}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:900px)");
  const [lang, setLang] = useState("en");
  const { i18n, t } = useTranslation();



  React.useEffect(() => {
    let lang = localStorage.getItem("language");
    setLang(lang)
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <AppBar position="static" className={classes.appBarStyle}>
          <Toolbar>
            {matches ? (
              <div
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                {/* <AppBar position="static" className={classes.appMobileView}>
                  <Toolbar> */}

                <img
                  src="logo.png"
                  className={classes.logoStyle}
                />

                {/* <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton> */}
                <Drawer />
                {/* </Toolbar>
                </AppBar> */}
              </div>
            ) : (
              <div className={classes.headerMainContainer}>
                <div className={classes.navLinksContainer}>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <Link to="/dashboard" className={classes.linkStyle}>
                      {t("header.edrmint")}
                    </Link>
                  </Typography>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <Link to="/dashboard/redeem" className={classes.linkStyle}>
                      {t("header.edrstaking")}
                    </Link>
                  </Typography>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <Link to="/dashboard/saving" className={classes.linkStyle}>
                      {" "}
                      {t("header.edrsaving")}
                    </Link>
                  </Typography >
                  <Typography>
                  <Link to="/">Home
                    {/* <img
                      src="logo.png"
                      className={classes.logoStyle}
                    /> */}
                  </Link>
                  </Typography>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <Link to="/dashboard/staking" className={classes.linkStyle}>
                      {t("header.edrfarm")}
                    </Link>
                  </Typography>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <Link to="/dashboard/lpreward" className={classes.linkStyle}>
                      {t("header.edrgovernance")}
                    </Link>
                  </Typography>
                  <Typography variant="h5" className={classes.navLinksStyle}>
                    <a style={{ color: "#31456A" }} href="https://bscscan.com/address/0x9dbbb15d6bc2c59fda73515eec0a7a55d2207f30#code" target="_blank">
                      {t("header.edrTokeninfo")}
                    </a>
                  </Typography>
                </div>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
