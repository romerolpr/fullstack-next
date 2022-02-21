import { storeWrapper } from '../src/store';

// bootstrap and react-components
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

// @media rules
import '../src/_assets/css/rules/large.rule.css';
import '../src/_assets/css/rules/middle.rule.css';
import '../src/_assets/css/rules/small.rule.css';

// import global
import '../src/_assets/css/global.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default storeWrapper.withRedux(App);