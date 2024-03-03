import styled, { keyframes } from "styled-components";

export default function LoadingCircle() {
  return (
    <AnimationWrapper>
      <AnimatedCircle />
    </AnimationWrapper>
  );
}

const AnimationWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    border-top-color: rgba(143, 188, 143, 0.5);
    border-left-color: #ff4c4c;
    border-bottom-color: rgba(47, 173, 211, 0.5);
    border-right-color: rgba(241, 201, 31, 0.25);
  }
  50% {
    border-top-color: rgba(143, 188, 143, 0.25);
    border-left-color: rgba(255, 76, 76, 0.5);
    border-bottom-color: #2fadd3;
    border-right-color: rgba(241, 201, 31, 0.5);
  }
  75% {
    border-top-color: rgba(143, 188, 143, 0.5);
    border-left-color: rgba(255, 76, 76, 0.25);
    border-bottom-color: rgba(47, 173, 211, 0.5);
    border-right-color: #f1c91f;
  }
  100% {
    transform: rotate(360deg);
    border-top-color: #8fbc8f;
    border-left-color: rgba(255, 76, 76, 0.5);
    border-bottom-color: rgba(47, 173, 211, 0.25);
    border-right-color: rgba(241, 201, 31, 0.5);
  }
`;

const AnimatedCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 10px solid #8fbc8f;
  border-left: 10px solid rgba(255, 76, 76, 0.5);
  border-bottom: 10px solid rgba(47, 173, 211, 0.25);
  border-right: 10px solid rgba(241, 201, 31, 0.5);
  animation: 2s linear infinite ${rotate};
`;
