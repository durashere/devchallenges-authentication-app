import classNames from 'classnames';

const Input = ({
  type = 'text',
  icon,
  multiline,
  value,
  onChange,
  label,
  placeholder = 'Placeholder',
  className,
}) => {
  return (
    <div className={`${className}`}>
      <label className="text-sm font-medium text-trueGray-600">{label}</label>
      <div className="flex items-center gap-2 p-2 border border-trueGray-500 rounded-xl">
        <span className="align-middle material-icons text-trueGray-500">{icon}</span>
        {multiline ? (
          <textarea
            rows={3}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full text-gray-800 placeholder-warmGray-300 focus:outline-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full text-gray-800 placeholder-warmGray-300 focus:outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
