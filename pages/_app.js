import Layout from '../components/Layout/Layout';
import Content from "../components/Content/Content";

import '../styles/index.scss';


const MyApp = ({Component, pageProps}) => {
    return (<Layout>
        <main className="main">
            <section className="c-section c-section--bg"></section>
            <Content/>
            <Component {...pageProps} />
        </main>
    </Layout>);
};

export default MyApp;
