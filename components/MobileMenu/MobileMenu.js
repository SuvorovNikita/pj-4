import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import menu from '../../../pj-3/public/header/menu.svg';
import close from '../../../pj-3/public/header/close.svg';
import logo from '../../../pj-3/public/header/logo.svg';

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'About', path: '/about'},
    {id: 3, title: 'Services', path: '/services'},
    {id: 4, title: 'Blog', path: '/blog'},
];

const MobileMenu = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleHeader = () => {
        setIsOpened((value) => !value);
    };

    const toggleHtmlOverlay = (isOpened) => {
        if (isOpened) {
            document.documentElement.classList.add('is-overlay');
            return;
        }

        document.documentElement.classList.remove('is-overlay');
    };

    useEffect(() => {
        toggleHtmlOverlay(isOpened);
    }, [isOpened]);

    return (
        <section className={'c-mobile-header' + (isOpened ? ' is-opened' : '')}>
            <div className="c-mobile-header__inner">
                <div className="container">
                    <div className="c-mobile-header__top">
                        <div className="c-mobile-header__logo">
                            <Link href="/">
                                <Image src={logo} alt=""/>
                            </Link>
                        </div>
                        <div
                            className="c-mobile-header__toggle"
                            role="button"
                            tabIndex="0"
                            onClick={() => toggleHeader()}
                            onKeyDown={(e) => (e.key === 'Enter' ? toggleHeader() : null)}>
                            {!isOpened && <Image className="c-mobile-header__icon" src={menu} alt="Open"/>}
                            {isOpened && <Image className="c-mobile-header__icon" src={close} alt="Close"/>}
                        </div>
                    </div>
                    <div className="c-mobile-header__body">
                        <div className="c-mobile-header__inner-body">
                            <div className="container">
                                <div className="c-mobile-header__flex">
                                    <div className="c-mobile-header__navigation">
                                        {navigation.map(({id, title, path}) => (
                                            <>
                                                <div className="c-mobile-header__item">
                                                    <Link key={id} className="c-mobile-header__menu-link" href={path}>
                                                        {title}
                                                    </Link>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className="c-mobile-header__actions">
                                        <button className="c-button c-button--base" href="#">
                                            CONTACT US
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileMenu;
