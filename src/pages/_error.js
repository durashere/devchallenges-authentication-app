import PropTypes from 'prop-types';

const Error = ({statusCode}) => {
  console.log(typeof statusCode);

  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.log(typeof statusCode);
  return {statusCode};
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
