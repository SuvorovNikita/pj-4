import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../Navbar/Navbar';
import MobileMenu from "../MobileMenu/MobileMenu";

import logo from '../../public/Logo/logo.svg';
import phone from "../../public/Icon/phone.svg"
import cart from "../../public/Icon/cart.svg"

const Header = () => {
    return (<>
        <header className="c-header">
            <div className="container">
                <div className="c-header__inner">
                    <div className="c-header__logo">
                        <Link href="">
                            <Image src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <Navbar/>
                    <div className="c-header__cart">
                        <span className="c-header__icon">
                        <Link href="/"> <Image src={cart} alt="cart"/></Link>
                        </span>
                        <div className="c-header__line"></div>
                        <div className="c-header__contact">
                            <span className="c-header__icon">
                                  <Image src={phone} alt="cart"/>
                                <Link className="c-header__phone" href="/">+999-888-76-54</Link>
                            </span>
                            <div className="c-header__text">Свяжитесь с нами для бронирования</div>
                        </div>
                    </div>
                    <div className="c-header__action">
                        <a className="c-button c-button--base" href="#">ЗАКАЗ СТОЛИКА</a>
                    </div>
                </div>
            </div>
        </header>
        <MobileMenu/>
    </>);
};

export default Header;
