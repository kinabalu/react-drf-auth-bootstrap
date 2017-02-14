import React from 'react';

export const required = value => value ? undefined : 'Required';
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const formClass = field =>
  field.meta.touched && field.meta.error ? "form-group has-error" : "form-group";

/* eslint-disable */

export const renderInput = (field) => (
  <div className={formClass(field)}>
    {field.label &&
    <label>{field.label}</label>
    }
    <input {...field.input} type={field.type} autoFocus={field.autoFocus} autoCorrect={field.autoCorrect} autoCapitalize={field.autoCapitalize} className={field.className} placeholder={field.placeholder}/>
    {field.meta.touched && field.meta.error && <span id="helpBlock2" className="help-block">{field.meta.error}</span>}
  </div>
);

export const renderSelect = (field) => (
  <div className={formClass(field)}>
    {field.label &&
    <label>{field.label}</label>
    }
    <select {...field.input} name={field.name} className={field.className}>
      {field.options.map(option =>
        <option key={option.id} value={option.id} disabled={option.disabled}>{option.label}</option>)}
    </select>
    {field.meta.touched && field.meta.error && <span id="helpBlock2" className="help-block">{field.meta.error}</span>}
  </div>
);

export const renderTextArea = (field) => (
  <div className={formClass(field)}>
    {field.label &&
    <label>{field.label}</label>
    }
    <textarea {...field.input} type={field.type} autoFocus={field.autoFocus} className={field.className} placeholder={field.placeholder}/>
    {field.meta.touched && field.meta.error && <span id="helpBlock2" className="help-block">{field.meta.error}</span>}
  </div>
);

export const normalizeDate = (value) => {
  if (!value) {
    return value
  }

  const onlyDate = value.replace(/[^\d]/g, '')
  if (onlyDate.length <= 2) {
    return onlyNums
  }
  if (onlyDate.length <= 4) {
    return `${onlyDate.slice(0, 2)}/${onlyDate.slice(2)}`
  }
  return `${onlyDate.slice(0, 2)}/${onlyDate.slice(2, 4)}/${onlyDate.slice(4, 8)}`
};

/* eslint-enable */
