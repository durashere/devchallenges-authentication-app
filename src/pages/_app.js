import PropTypes from 'prop-types';
import {AuthProvider} from '../context/useAuth';

import '../styles/tailwind.css';

const CustomApp = ({Component, pageProps}) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

CustomApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default CustomApp;
