import React from 'react';

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

export default FormInput;
