import PropTypes from 'prop-types';

import Header from '../modules/Header';
import Footer from '../modules/Footer';

const DefaultLayout = ({uid, photo, children}) => {
  return (
    <div className="container px-6 py-6 mx-auto">
      <Header uid={uid} photo={photo} />
      <div className="mx-auto sm:w-8/12 w- md:w-7/12 lg:w-6/12">
        {children}
        <Footer />
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.array,
};

export default DefaultLayout;
