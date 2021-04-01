import React, { useEffect, useState } from 'react'

type TProps = {
  max: number | undefined,
  value: number | undefined,
}

export const Range: React.FC<TProps> = ({ max=0, value=0 }) => {
  console.log(value)
  const [currentValue, setCurrentValue] = useState<number>(value);
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    if(!status) return;
  
    const step = () =>{
      setCurrentValue(value => value + 1)
    }

    const timer = setInterval(step, 1000);

    

    return () => clearInterval(timer);
  },[value])

  return (
    <div>
      <input type="range" step="1" min="0" max={max} value={currentValue} />
    </div>
  )
}
