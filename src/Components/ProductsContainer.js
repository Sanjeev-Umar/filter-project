import styled from "styled-components";

const Container = styled.div`
  background-color: #eee;
  padding: 15px;
  border-radius: 5px;
`;

const ProductContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default ProductContainer;
