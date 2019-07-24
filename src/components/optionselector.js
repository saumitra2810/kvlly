import React from 'react'

const OptionSelector = props => {
  const { option } = props
  return (
    <>
      <label htmlFor={option.name}>{option.name} </label>
      <div className="dropdown">
        <select name={option.name} key={option.id} onChange={props.onChange}>
          {option.values.map(value => {
            return (
              <option
                value={value}
                key={`${option.name}-${value}`}
              >{`${value}`}</option>
            )
          })}
        </select>
      </div>
      <br />
    </>
  )
}

export default OptionSelector
