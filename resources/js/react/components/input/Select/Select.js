import React from 'react';

const Select = (props) => {
//   const [value, setValue] = useState(props.value);
  const options = Object.keys(props.values).map(key => {
      return <option value={key} key={key}>{props.values[key]}</option>
  })
  return (
    <div className='text-input row center-content'>
      <div className='wrapper'>
        <label htmlFor={props.label}>{props.label}</label>
        <select name={props.label}>
          {options}
        </select>
      </div>
    </div>
  );
};

export default Select;