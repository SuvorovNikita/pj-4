import React from "react";
import Link from 'next/link';
import Image from "next/image";
import card from "../../public/icon/card.svg";

const Content = () => {
    return (<section className="c-section c-section--home">
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
                <div className="c-card c-card--base">
                    <div className="c-card__inner">
                        <div className="c-card__body">
                            <div className="c-card__content">
                                <div className="c-card__image">
                                    <Image src={card} alt={""}/>
                                </div>
                                <div className="c-card__title">Магическая <span>Атмосфера</span></div>
                                <div className="c-card__subtitle">В нашем заведении царит магическая атмосфера
                                    наполненная вкусными ароматами
                                </div>
                            </div>
                        </div>
                        <div className="c-card__body">
                            <div className="c-card__content">
                                <div className="c-card__image">
                                    <Image src={card} alt={""}/>
                                </div>
                                <div className="c-card__title">Лучшее качество <span>Еды</span></div>
                                <div className="c-card__subtitle">Качество нашей
                                    <br/>    Еды - отменное!
                                </div>
                            </div>
                        </div>
                        <div className="c-card__body">
                            <div className="c-card__content">
                                <div className="c-card__image">
                                    <Image src={card} alt={""}/>
                                </div>
                                <div className="c-card__title">Недорогая <span>Еда</span></div>
                                <div className="c-card__subtitle">Стоимость нашей Еды <br/>
                                    зависит только от ее
                                    количества. Качество <br/>
                                    всегда на высоте!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Content;