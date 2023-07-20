import styled, { css, keyframes } from "styled-components";

const animateborder = (deg: number, step: number, time: number) => {
  const animF = () => {
    let anim = `
    0%{
      background: conic-gradient(
        #37f 0deg ${`${deg}deg`}, 
        #14181f ${`${deg}deg`} 0deg
        );
    }`
    const delta = 50;
    for (let i = 1; i < delta + 1; i++) {
      anim += `
              ${100 * i / delta}%{
                background: conic-gradient(
                  #37f 0deg ${`${deg - step * i / delta}deg`}, 
                  #14181f ${`${deg - step * i / delta}deg`} 0deg
                  );
              }`
    }

    return anim;
  }

  const anim2 = keyframes`${animF()}`;

  const anim = keyframes`
    0%{
      background: conic-gradient(
        #37f 0deg ${`${deg}deg`}, 
        #14181f ${`${deg}deg`} 0deg
        );
    }
    100%{
      background: conic-gradient(
        #37f 0deg ${`${deg - step}deg`}, 
        #14181f ${`${deg - step}deg`} 0deg
        );
    }
  `
  return css`${anim2} 1s linear forwards 1`
};

const animateborder2 = keyframes`
  100%{
    transform: rotate(1turn);
  }
`
const animateNumber = keyframes`
  0%{
    transform: translateY(0%);
  }
  80%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
`

export const GreyFonPopup = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(35,35,35,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerContainer = styled.div<{ time: number, currentNum: number }>`
  position: relative;
  z-index: 0;
  width: 200px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;  

  &::before{
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    animation: ${props => animateborder(360 * props.currentNum / props.time, 360 / props.time, props.time)}, 
              ${animateborder2} 4s linear infinite;
  }

  &::after{
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #14181f;
    border-radius: 12px;
  }
`;


export const NumberContainer = styled.div`
  width: 100%;

  color: #37f;
  font-size: 32px;
  font-weight: 500;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 1.2em;

  span{
    animation: ${animateNumber} 1s ease-out forwards;
  }
`;

