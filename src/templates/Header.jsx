import styled, { css } from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <TopSection>
        <Content align="right">
          <span>LOGIN</span>
        </Content>
      </TopSection>
      <Content>
        <CategorySection>
          <CategoryItemWrap state={"active"}>
            <span>HOME</span>
            <CategoryItemActiveBottomLine />
          </CategoryItemWrap>
          <CategoryItemWrap>
            <span>Category1</span>
            <CategoryItemActiveBottomLine />
          </CategoryItemWrap>
          <CategoryItemWrap>
            <span>Category2</span>
            <CategoryItemActiveBottomLine />
          </CategoryItemWrap>
        </CategorySection>
      </Content>
      <CategoryMainSectionFilterArea />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.align === "right" &&
    css`
      align-items: end;
    `}
`;

const TopSection = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid #d9d9d9;
  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #333333;
  }
`;

const CategorySection = styled.div`
  height: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 5rem;
`;

const CategoryItemWrap = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.6rem;
    color: #9d9d9d;
  }

  ${(props) =>
    props.state === "active" &&
    css`
      span {
        font-size: 1.6rem;
        font-weight: bold;
        color: #333333;
      }
      div {
        display: unset;
      }
    `}
`;

const CategoryItemActiveBottomLine = styled.div`
  display: none;
  width: 100%;
  height: 0.4rem;
  background-color: #00c797;
  position: absolute;
  bottom: 0;
  border-radius: 0.5rem;
`;

const CategoryMainSectionFilterArea = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #6192cd;
  border-top: 0.1rem solid #2b8bfd;
  border-bottom: 0.1rem solid #2b8bfd;
`;
