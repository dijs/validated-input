import React from 'react';
import validator from 'validator';

export default class ValidatedInput extends React.Component {
  state = {
    hasBlurred: false
  };
  render() {
    const {
      validate,
      onBlur,
      containerClassName = 'validation-container',
      ...props
    } = this.props;
    const validatorProxy = new Proxy(
      {},
      {
        get: function(obj, prop) {
          return (...args) => {
            return validator[prop](props.value, ...args);
          };
        }
      }
    );
    const hasError = this.state.hasBlurred && !validate(validatorProxy);
    const containerClasses = `${containerClassName} ${hasError ? 'error' : ''}`;
    return (
      <div className={containerClasses}>
        <input
          {...props}
          onBlur={(...args) => {
            this.setState({ hasBlurred: true });
            if (onBlur) {
              onBlur(...args);
            }
          }}
        />
      </div>
    );
  }
}
