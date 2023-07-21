import { useEffect, useState } from 'react';
import { TimerContainer } from './style';

interface IPropsTimer {
  time: number;
}

export const TimerFromArticle: React.FC<IPropsTimer> = ({ time }) => {

  const [currentNum, setCurrentNum] = useState(time);

  useEffect(() => {
    const idTimer = setInterval(() => {
      console.log(currentNum - 1);
      currentNum > 1 && setCurrentNum(currentNum - 1);
    }, 1000);

    return(()=>{
      clearInterval(idTimer)
    })
  }, [time])
  
  return (
      <TimerContainer
        time={time}
        currentNum={currentNum}
      >
      </TimerContainer>
  )
}
