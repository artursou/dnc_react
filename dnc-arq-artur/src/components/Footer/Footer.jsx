import { Link } from "react-router-dom"



// ASSETS
import "./Footer.css"
import Logo from "../../assets/dnc-logo.svg"
import BrazilLogo from "../../assets/brazil_icon.svg"
import UsaLogo from "../../assets/usa_icon.svg"
import FacebookLogo from "../../assets/facebook.svg"
import InstagramLogo from "../../assets/instagram.svg"
import TwitterLogo from "../../assets/twitter.svg"
import LikedinLogo from "../../assets/likedin.svg"


function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={Logo} />
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho</p>
                        <div className="d-flex social-link jc-space-between">
                            <a href="https://google.com" target="_blank">
                                <img src={FacebookLogo}></img>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={TwitterLogo}></img>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={LikedinLogo}></img>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={InstagramLogo}></img>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex">
                            <div className="footer-col">
                                <h3>Pages</h3>
                                <ul className="d-flex">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/about"}>About</Link></li>
                                    <li><Link to={"/projects"}>Projects</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={BrazilLogo} />
                        <img src={UsaLogo} />
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer