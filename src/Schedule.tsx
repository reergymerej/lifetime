import React from 'react';
import Milemarker from './Milemarker';

type Props = {
  age: number
}

const Schedule: React.FC<Props> = () => {
  return (
    <div className="Schedule">
      <Milemarker
        time={600}
        age={0}
        label="Birth"
      />
      <Milemarker
        time={800}
        age={9}
        label="Breakfast"
      />
      <Milemarker
        time={1000}
        age={18}
      />
      <Milemarker
        time={1200}
        age={27}
        label="Lunch"
      />
      <Milemarker
        time={1400}
        age={36}
      />
      <Milemarker
        time={1800}
        age={54}
        label="Dinner"
      />
      <Milemarker
        time={2200}
        age={72}
        label="Death"
      />
    </div>
  )
}

export default Schedule
