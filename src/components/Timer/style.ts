import styled, { css, keyframes } from "styled-components";

const animateBorder = (deg: number, step: number) => {
  let myKeyframes = ``;
  const delta = Math.round(400 / (360 / step));
  for (let i = 0; i < delta + 1; i++) {
    myKeyframes += `
              ${100 * i / delta}%{
                background: conic-gradient(
                  #37f 0deg ${`${deg - step * i / delta}deg`}, 
                  #14181f ${`${deg - step * i / delta}deg`} 0deg
                  );
              }`
  }

  const anim2 = keyframes`${myKeyframes}`;

  return css`${anim2} 1s linear forwards 1`
};

const animateBorderRotate = keyframes`
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

export const TimerContainer = styled.div<{ time: number; currentNum: number }>`
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
    animation: ${props => animateBorder(360 * props.currentNum / props.time, 360 / props.time)}, 
              ${animateBorderRotate} 4s linear infinite;
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

