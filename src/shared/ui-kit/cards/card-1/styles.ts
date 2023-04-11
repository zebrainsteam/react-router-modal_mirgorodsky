import styled from "styled-components";

export const Avatar = styled.img`
  position: relative;
  display: block;
  margin: auto;
  width: 50px;
  transition: transform 0.2s 0s ease;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  padding: 100px 0;
  background: #E3E7F2;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: silver;

    opacity: 0;
    transition: opacity 0.2s 0s ease;
  }
`;

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  cursor: pointer;

  &:hover {
    ${AvatarWrapper}:before {
      opacity: 0.5;
    }

    ${Avatar} {
      transform: scale(1.3);
    }
  }
`;
