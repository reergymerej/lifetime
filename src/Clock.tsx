import React from 'react';

type Props = {
  age: number
}

const Clock: React.FC<Props> = ({ age }) => {
  const end = 2200
  const start = 600
  const dayDuration = end - start
  const endAge = 72
  const currentTime = ((age / endAge) * dayDuration) + start
  return (
    <div className="Clock">
      {Math.round(currentTime)}
    </div>
  )
}

export default Clock
