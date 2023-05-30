// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';




const FormInput = ({id, type, placeholder, pattern, maxLength, value, onChange, onFocus, onBlur}) => (
    <label className={`form__${id}`}>
        <input
            type={type}
            id={`${id}-input`}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    </label>
);


FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    maxLength: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
};


export default FormInput;
