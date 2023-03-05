import styled from "styled-components";

type HeaderProps = {
  isCategory: boolean;
};

export const HeaderWrapper = styled.div<HeaderProps>`
  padding-top: ${(props): string => (props.isCategory ? "0px" : "48px")};
  .header {
    width: 100%;
    min-width: 360px;
    max-width: 768px;
    background-color: ${(props): string => (props.isCategory ? "transparent" : "white")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 1;
    transition: top 0.4s ease-in-out;
    padding: 8px 16px 4px 16px;
  }

  .logo {
    width: 22px;
    height: 30px;
    background-color: ${(props): string => (props.isCategory ? "transparent" : "white")};
  }
  .back {
    width: 32px;
    height: 32px;
    border: none;
    background-color: ${(props): string => (props.isCategory ? "transparent" : "white")};
  }
  .back {
    width: 32px;
    height: 36px;
  }
  .pageDescription {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .div {
    height: 30px;
  }
  .logout {
    margin-top: 4px;
  }
`;

interface MyButtonProps {
  isCategory: boolean;
}

export const LogoutBtn = styled.div<MyButtonProps>`
  color: ${(props): string => (props.isCategory ? "white" : "black")};
`;
