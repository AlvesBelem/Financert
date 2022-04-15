import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;
    margin-top: 25px;

    p {
      font-size: 10px;
    }

    span {
      font-size: 15px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 750px) {
    margin: 5px auto;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
