import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import menu from '../../public/MobileImg/icon/btn.svg';
import close from '../../public/MobileImg/icon/close.svg';
import logo from '../../public/MobileImg/icon/logo-mobile.svg';

const navigation = [
    {id: 1, title: 'Главная', path: '/'},
    {id: 2, title: 'Меню', path: '/'},
    {id: 3, title: 'О нас', path: '/'},
    {id: 4, title: 'Бронь', path: '/'},
    {id: 5, title: 'Корзина', path: '/cart'},
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
                                                    <Link className="c-mobile-header__menu-link" href={path}>
                                                        {title}
                                                    </Link>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className="c-mobile-header__actions">
                                        <button className="c-button c-button--base" href="#">
                                            Заказ столика
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
