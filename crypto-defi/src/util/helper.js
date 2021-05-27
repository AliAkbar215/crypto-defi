// import TronWeb from "tronweb";

// const TronHelper = {
//   tronWeb: null,
//   isInstalled: !!window.tronWeb,

//   async initTron() {
//     const HttpProvider = TronWeb.providers.HttpProvider;
//     const fullNode = new HttpProvider("https://api.trongrid.io");
//     const solidityNode = new HttpProvider("https://api.trongrid.io");
//     const eventServer = "https://api.trongrid.io/";
//     const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer);
//     this.tronWeb = gettronWeb;

//     const tronLoader = setInterval(() => {
//       if (window.tronWeb && window.tronWeb.ready) {
//         this.tronWeb = window.tronWeb;
//         clearInterval(tronLoader);
//       } else {
//         this.tronWeb = gettronWeb;
//       }
//     }, 500);
//   },
// };

// export default TronHelper;
