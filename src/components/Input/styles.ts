import { css } from "styled-components";
import styled from "styled-components";

interface InputContainerProps {
  isErrored: Boolean;
}

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--lightGrey);
  color: var(--lightGray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${({ isErrored }: InputContainerProps) =>
    isErrored &&
    css`
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      border-color: var(--red);
      svg {
        color: var(--red);
      }

      @keyframes shake {
        10%,
        90% {
          transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
          transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
          transform: translate3d(4px, 0, 0);
        }
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--lightGrey);
    }
  }

  svg {
    margin-right: 16px;
  }
`;
