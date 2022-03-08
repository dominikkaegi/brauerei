import { Link } from "remix";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";

export const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    const copyrightText = `Copyright © Kägi Bräu ${fullYear}`;


    return (
        <footer>
            <div className="footer">
                <div className="footer-alignment container">
                    <div>
                        <span className="copyright">{copyrightText}</span>
                    </div>
                    <div>
                        <ul className="footer-icon-list">
                            <li className="footer-icon-list-item">
                                <a href="https://www.instagram.com/kaegibraeu/" target="_blank">
                                    <i className="icon">
                                        <InstagramIcon />
                                    </i>
                                </a>
                            </li>
                            <li className="footer-icon-list-item">
                                <a href="https://www.facebook.com/Kaegibraeu/" target="_blank">
                                    <i className="icon">
                                        <FacebookIcon />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-general">
                        <ul>
                            <li>
                                <Link to="/impressum">Impressum</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
