import styled, { keyframes } from "styled-components";

export default function LoadingDots() {
  return (
    <AnimationWrapper>
      <FirstDot />
      <SecondDot />
      <ThirdDot />
    </AnimationWrapper>
  );
}

const AnimationWrapper = styled.div`
  width: 60px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const firstDotAnimation = keyframes`
  0% {
    background: #f5f5f5;
  } 
  25% {
    background: rgba(245, 245, 245, 0.66);
  } 
  50% {
    background: rgba(245, 245, 245, 0.33);
  }
  75% {
    background: rgba(245, 245, 245, 0.66);
  }
  100% {
    background: #f5f5f5;
  }
`;

const secondDotAnimation = keyframes`
  0% {
    background: rgba(245, 245, 245, 0.66);
  } 
  25% {
    background: #f5f5f5;
  } 
  50% {
    background: rgba(245, 245, 245, 0.66);
  }
  75% {
    background: rgba(245, 245, 245, 0.33);
  }
  100% {
    background: rgba(245, 245, 245, 0.66);
  }
`;

const thirdDotAnimation = keyframes`
  0% {
    background: rgba(245, 245, 245, 0.33);
  } 
  25% {
    background: rgba(245, 245, 245, 0.66);
  } 
  50% {
    background: #f5f5f5;
  }
  75% {
    background: rgba(245, 245, 245, 0.66);
  }
  100% {
    background: rgba(245, 245, 245, 0.33);
  }
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
`;

const FirstDot = styled(Dot)`
  animation: 1.5s linear infinite ${firstDotAnimation};
`;
const SecondDot = styled(Dot)`
  animation: 1.5s linear infinite ${secondDotAnimation};
`;
const ThirdDot = styled(Dot)`
  animation: 1.5s linear infinite ${thirdDotAnimation};
`;
