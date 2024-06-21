/* eslint-disable react/prop-types */

const CommonRequestRadio = ({ name, value, onChange, options, submitted, error }) => {
  return (
    <div className={`sd-radio-list ${submitted && error ? 'sd-form-row-invalid' : ''}`}>
      {options.map((option) => (
        <div className="sd-radio-row" key={option.value}>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id={option.id}
              className="custom-control-input"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required
            />
            <label className="custom-control-label" htmlFor={option.id}>
              {option.label}
            </label>
            {value === option.value && (
              <span className="input-icon icon-valid"></span>
            )}
          </div>
        </div>
      ))}
      {submitted && error && (
        <div className="text-danger">
          <div className="sd-mt-0_5 p-small">
            {error}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonRequestRadio;
