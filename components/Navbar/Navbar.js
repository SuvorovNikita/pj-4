import Link from 'next/link';

const navigation = [
    {id: 1, title: 'ГЛАВНАЯ', path: '/'},
    {id: 2, title: 'МЕНЮ', path: '/'},
    {id: 3, title: 'О НАС', path: '/'},
    {id: 4, title: 'БРОНЬ', path: '/'},
];

const Navbar = () => {
    return (
        <nav className="c-header__menu">
            {navigation.map(({id, title, path}) => (
                <>
                    <div className="c-header__item">
                        <Link key={id} className="c-header__menu-link" href={path}>
                            {title}
                        </Link>
                    </div>
                </>
            ))}
        </nav>
    );
};

export default Navbar;
