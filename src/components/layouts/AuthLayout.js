import PropTypes from 'prop-types';

import Header from '../modules/Header';
import Footer from '../modules/Footer';

const AuthLayout = ({children}) => {
  return (
    <div className="container grid h-screen mx-auto sm:place-items-center">
      <div className="grid p-6 grid-rows-mobile">
        <div className="mb-2 sm:border sm:rounded-3xl sm:border-warmGray-300 sm:p-8">
          <Header />
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.array,
};

export default AuthLayout;
