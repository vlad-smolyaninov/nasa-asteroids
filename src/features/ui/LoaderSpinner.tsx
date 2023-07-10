import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  & {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({theme}) => theme.colors.main};
    border-color: ${({theme}) => theme.colors.main} transparent ${({theme}) => theme.colors.main} transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoaderSpinner: React.FC = () => (
    <LoaderWrapper>
        <Spinner/>
    </LoaderWrapper>
)

