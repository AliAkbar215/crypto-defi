import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import CustomDialogContent from '../NotConnectedModal/index'
import { useTranslation } from "react-i18next";

export default function Home() {

  const [lang, setLang] = useState("en");
  const { i18n, t } = useTranslation();
  const [name, setName] = React.useState("English");
  const selectRef = useRef();
     React.useEffect(() => {
     if (window.location.href.includes("?ref=")) {

      let getAddress = window.location.href.split("?ref=")[1];
      console.log(getAddress, "getAddress")
      let final = getAddress.slice(0, 42);
      localStorage.setItem("MINT_ADD", final);  
    }
  }, []);

  // const handleChange = event => {
  //   // console.log("selected val is ", event.target.value);
  //   setLang(event);
  //   i18n.changeLanguage(event);
  // };

  
  React.useEffect(() => {
    let getUrl = window.location.href;
    if (getUrl.includes("?lang")) {
      let getFinal = getUrl.split("?lang=")[1];
      setLang(getFinal);
      i18n.changeLanguage(getFinal);
      
      localStorage.setItem("language", getFinal);  
      switch (getFinal) {
        case "en":
          return setName("English");
        case "in":
          return setName("bahasa Indonesia");
        case "vi":
          return setName("Việt Nam");
        case "ph":
          return setName("Pilipinas");
        case "tu":
          return setName("Türkiye");
        case "ru":
          return setName("русский");
        case "ch":
          return setName("中国");
        case "ko":
          return setName("한국어");
      }
    }
  }, []);

  return (
    <div>
      <CustomDialogContent/>
      {/* <div class="preloader">
        <div class="spinner">
          <span class="spinner-rotate"></span>
        </div>
      </div> */}

      <div className="navbar navbar-fixed-top custom-navbar" role="navigation" >
        <div className="container">

          {/* <!-- navbar header --> */}
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Crypto-DeFi</a>
            {/* <a href="#" ><img src="/etron.PNG" style={{width:"12rem" , height:"4rem"}}/> </a> */}
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">

              <li><a href="#about" className="smoothScroll">{t("homepage.ABOUTEDR")}</a></li>
              <li><a href="#experience" className="smoothScroll">{t("homepage.EDRPROJECTS")}</a></li>
              <li><a href="#quotes" className="smoothScroll">{t("homepage.CDEFIGOALS")}
</a></li>
              <li><a href="#contact" className="smoothScroll">{t("homepage.CONTACT")}</a></li>
              <li><Link to="/dashboard" className="smoothScroll">{t("homepage.Dashboard")}</Link></li>
              <li className="smoothScroll"  >
              <div className="dropdown">
          <button classNameName="dropbtn" style={{backgroundColor:"#7B6283", color:"white", padding:".1rem 1rem", }} >{name}</button>
  {/* <button >Dropdown</button> */}
          <div className="dropdown-content">
    <a href="?lang=en"  >English</a>
    <a  href="?lang=in" >bahasa-Indonesia</a>
    <a  href="?lang=vi" > Việt Nam</a>
    <a  href="?lang=ph" >Pilipinas</a>
    <a  href="?lang=tu" >Türkiye</a>
    <a  href="?lang=ru" >русский</a>
    <a href="?lang=ch"  >中国</a>
    <a  href="?lang=ko" >한국어</a>
  </div>
</div>

</li>
            </ul>
          </div>

        </div>
      </div>

      {/* <!-- Home Section --> */}

      <section id="home" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-6">
              <div className="home-img"></div>
            </div>
            <div style={{marginTop:"auto"}}></div>
            {/* <br/>
<br/>
<br/> 
<br/>
<br/>
<br/>  */}
            <div className="col-md-6 col-sm-6" style={{ marginTop:"5rem "}}>
              <div className="home-thumb">
                <div className="section-title">
                  <h4 className="wow fadeInUp" data-wow-delay="0.3s" >{t("homepage.welcome")}</h4>
                  <h1 className="wow fadeInUp" data-wow-delay="0.6s">{t("homepage.EDinar")} <strong> {t("homepage.MultiChain")}</strong> {t("homepage.crypto-defiMulti-Chain")}
                              </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.9s">
                  {t("homepage.p1")}    <br />
                  {t("homepage.p2")}  
                     
</p>

<div style={{marginBottom:"3rem", position:"relative", bottom:"10px"}}>

                  <Link to="/dashboard" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">{t("homepage.getstarted")}</Link>
</div>

                </div>
              
              </div>
            </div>


          </div>
        </div>
      </section>
      {/* <br/>
<br/> 
<br/>
<br/> */}
      <section id="about" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12">
              <div className="about-thumb">
                <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                  <h1> {t("homepage.abstract")}  
</h1>
                  <p className="color-yellow">{t("homepage.p3")}  
</p>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <p>{t("homepage.p4")}  
</p>
                  <p>
                  {t("homepage.p5")}  
                        </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="background-image about-img"></div>
            </div>

            <div className="bg-yellow col-md-3 col-sm-6">
              <div className="skill-thumb">
                <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                  <h1>{t("homepage.multichaindapp")}</h1>
                  <p className="color-white">{t("homepage.p6")}</p>
                </div>

                <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                  <strong>{t("homepage.prog1")} </strong>
                  <span className="color-white pull-right">{t("homepage.span55%")}</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}></div>
                  </div>

                  <strong>{t("homepage.prog2")}</strong>
                  <span className="color-white pull-right">{t("homepage.span23%")}</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "23%"}}></div>
                  </div>

                  <strong>{t("homepage.prog3")}</strong>
                  <span className="color-white pull-right">{t("homepage.span22%")}</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "22%"}}></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="service" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="bg-yellow col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                <i className="fa fa-desktop"></i>
                <h3>{t("homepage.edrmint")}</h3>
                <p className="color-white">{t("homepage.edrmintp1")} </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                <i className="fa fa-paper-plane"></i>
                <h3>{t("homepage.network")}</h3>
                <p className="color-white">
                {t("homepage.networkp1")} </p>
              </div>
            </div>

            <div className="bg-dark col-md-3 col-sm-6">
              <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                <i className="fa fa-table"></i>
                <h3>{t("homepage.liquidy")}  </h3>
                <p className="color-white">{t("homepage.liquidyp1")} </p>
              </div>
            </div>

            <div className="bg-white col-md-3 col-sm-6">
              <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                <i className="fa fa-html5"></i>
                <h3>{t("homepage.governance")}</h3>
                <p>{t("homepage.governancep1")} </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="experience" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-6">
              <div className="background-image experience-img"></div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="color-white experience-thumb">
                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                  <h1>{t("homepage.governance")}</h1>
                  <p className="color-white">{t("homepage.governancep1")}</p>
                </div>

                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">{t("homepage.governance")} <small>{t("homepage.march")} </small></h3>
                    <p className="color-white">{t("homepage.marp")}

                                   </p>
                  </div>
                </div>

                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">{t("homepage.network")} <small>{t("homepage.may")}</small></h3>
                    <p className="color-white">{t("homepage.mayp")}
                                   </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="education" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-6">
              <div className="color-white education-thumb">
                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                  <h1>{t("homepage.edinargovernance")}</h1>
                  <p className="color-white">{t("homepage.goverp1")}
</p>
                </div>

                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">{t("homepage.liquidy")}<small> {t("homepage.june")}</small></h3> {t("homepage.june")}
                    <p className="color-white"> {t("homepage.junep")}</p>
                  </div>
                </div>

                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">{t("homepage.edrlprewards")} <small>{t("homepage.aug")}</small></h3>
                    <p className="color-white">{t("homepage.edrp1")}</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="background-image education-img"></div>
            </div>

          </div>
        </div>
      </section>
      <section id="quotes" className="parallax-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">

            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <i className="wow fadeInUp fa fa-star" data-wow-delay="0.6s"></i>
              <h2 className="wow fadeInUp" data-wow-delay="0.8s">{t("homepage.buildapplication")}
                    </h2>
              <p className="wow fadeInUp" data-wow-delay="1s">{t("homepage.financeapplication")}

</p>
            </div>

          </div>
        </div>
      </section>
      <section id="contact" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12">
              <div className="contact-form">
                <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                  <h1 className="color-white">{t("homepage.hellow")}</h1>
                  <p className="color-white">{t("homepage.hellowp1")}.</p>
                </div>

                <div id="contact-form">
                  <form action="#template-mo" method="post">
                    <div className="wow fadeInUp" data-wow-delay="1s">
                      <input name="fullname" type="text" className="form-control" id="fullname" placeholder={t("homepage.yourName")}/>
                                   </div>
                      <div className="wow fadeInUp" data-wow-delay="1.2s">
                        <input name="email" type="email" className="form-control" id="email" placeholder={t("homepage.youemail")}/>
                                   </div>
                        <div className="wow fadeInUp" data-wow-delay="1.4s">
                          <textarea name="message" rows="5" className="form-control" id="message" placeholder={t("homepage.message")}></textarea>
                        </div>
                        <div className="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.6s">
                          <input name="submit" type="submit" className="form-control" id="submit" value="Send"/>
                                   </div>
                              </form>
                      </div>

                    </div>
               </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="background-image contact-img"></div>
                  </div>

                  <div className="bg-dark col-md-3 col-sm-6">
                    <div className="contact-thumb">
                      <div className="wow fadeInUp contact-info" data-wow-delay="0.6s">
                        <h3 className="color-white">{t("homepage.contactwithUs")}</h3>
                        <p>{t("homepage.Sharedetails")}</p>
                      </div>

                      <div className="wow fadeInUp contact-info" data-wow-delay="0.8s">
                        <h3 className="color-white">{t("homepage.contacttelegram")}</h3>
                        <p><i className="fa fa-phone"></i> @edrdefiofficial</p>
                        <p><i className="fa fa-envelope-o"></i> <a href="mailto:hello@company.co">hello@edrdefi.io</a></p>
                        <p><i className="fa fa-globe"></i> <a href="#">https://edrdefi.io</a></p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
</section>
<footer>
	<div className="container">
		<div className="row">

               <div className="col-md-12 col-sm-12">
                    <div className="wow fadeInUp footer-copyright" data-wow-delay="1.8s">
                         <p>Copyright &copy; 2021 EDinar DeFi
                    
                    | Contact us for support: <a href="http://www.edrdefi.io" target="_parent">support@edrdefi.io</a></p>
                    </div>
				<ul className="wow fadeInUp social-icon" data-wow-delay="2s">
                         <li><a href="#" className="fa fa-facebook"></a></li>
                         <li><a href="#" className="fa fa-twitter"></a></li>
                         <li><a href="#" className="fa fa-google-plus"></a></li>
                         <li><a href="#" className="fa fa-dribbble"></a></li>
                         <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul>
               </div>
			
		</div>
	</div>
</footer>
          </div>
  )
}
