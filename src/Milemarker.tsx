import React from 'react';

type Props = {
  age: number
  label?: string
  time: number
}

const Milemarker: React.FC<Props> = ({ age, label, time }) => {
  return (
    <div className="Milemarker">
      <div className="time">
        {time}
      </div>
      <div className="age">
        {age}
      </div>
      <div className="label">
        {label}
      </div>
    </div>
  )
}

export default Milemarker
