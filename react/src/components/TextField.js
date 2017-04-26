import React from 'react';

const TextField = props => {
  let inputClass, labelClass, spanClass;
  if (props.errors) {
    inputClass = "is-invalid-input";
    labelClass = "is-invalid-label";
    spanClass = "form-error is-visible";
  } else {
    spanClass = "form-error";
  }

  return (
    <label className={labelClass}>{props.label}
      <input
        className={inputClass}
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
      />
      <span className={spanClass}>{props.errors}</span>
    </label>
  );
}

export default TextField;
