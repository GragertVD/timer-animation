import { useState } from 'react';
import { GreyFonPopup, NumberContainer, TimerContainer } from './style';

interface IPropsTimer {
  time: number;
}

export const Timer: React.FC<IPropsTimer> = ({ time }) => {

  const [currentNum, setCurrentNum] = useState(time > 100 ? 100 : time);

  return (
    <GreyFonPopup>
      <TimerContainer
        time={time > 100 ? 100 : time}
        currentNum={currentNum}
      >
        <NumberContainer>
          <span
            key={currentNum}
            onAnimationEnd={
              () => {
                currentNum > 1 && setCurrentNum(currentNum - 1);
              }
            }
          >{currentNum}</span>
          <span
            key={-currentNum}
          >{currentNum - 1}</span>
        </NumberContainer>
      </TimerContainer>
    </GreyFonPopup>

  )
}
