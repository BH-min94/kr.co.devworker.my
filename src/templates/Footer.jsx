import styled from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <Content>
        <Section>
            <h3>바다(SEA)</h3>
            <span>184-25-01936</span>
        </Section>
        <Section>
            <span>CEO : MIN BYUNG HEE</span>
            <span>TEL : +82 10 8951 0643</span>
        </Section>
        <Section>
            <span>Email : bhmin.work@gmail.com</span>
        </Section>
      </Content>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 20rem;
  background: linear-gradient(90deg, #278bff 0%, #7995b5 83%, #999999 94%);
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 102.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  h3, p, span {
    color: #FFFFFF;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
