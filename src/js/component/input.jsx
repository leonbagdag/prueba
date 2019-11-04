import React from 'react';

const Input = ({ name, label, value, type, onChange }) => {
    return (<>
    <label htmlFor={name}>{label}</label>
    <input
        value={value}
        onChange={onChange}
        id={name}
        min="4"
        max="10"
        name={name}
        type={type}
        title='holi'
        
        required
    />
    </>);
}

export default Input;