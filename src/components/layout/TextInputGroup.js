import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}: </label> {error && <span className="invalid-feedback d-inline">{error}</span>}
            <input onChange={onChange} type={type} name={name} className={classnames('form-control form-control-lg', {'is-invalid': error})} value={value} placeholder={placeholder} />
        </div>
     );
}

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
