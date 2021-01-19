import classNames from 'classnames';

const Button = ({primary, fullWidth, onClick, type, className, children}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        `border rounded-xl py-2 px-8 focus:outline-none font-medium ${className}`,
        {
          'border-blue-500 bg-blue-500 text-white': primary,
          'border-trueGray-500 bg-transparent text-trueGray-500': !primary,
          'w-full': fullWidth,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
