import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
`;

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;
