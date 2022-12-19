import React from "react";
import Link from 'next/link';

const Content = () => {
    return (<section className="c-section c-section--base">
        <div className="container">
            <div className="c-section__inner">
                <div className="c-section__content">
                    <p className="c-section__subtitle">Добро пожаловать в</p>
                    <h1 className="c-section__title">Наш ресторан</h1>
                    <div className="c-section__lines">
                        <div className="c-section__line"></div>
                        <p className="c-section__slogan">Дом лучшей еды</p>
                        <div className="c-section__line"></div>
                    </div>
                    <div className="c-section__action">
                        <Link className="c-button c-button--base  c-button--base--padding" href="">VIEW MENU</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Content;