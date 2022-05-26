import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  /* justify-content: space-between; */
  padding: 7px 10px;
  margin: 18px;
`;

const ProductDetails = styled.div`
  width: 22%;
  text-transform: capitalize;
`;

const Products = (props) => {
  return (
    <Container>
      <ProductDetails>{props.cloth.product}</ProductDetails>
      <ProductDetails>Color : {props.cloth.color}</ProductDetails>
      <ProductDetails>Size: {props.cloth.size}</ProductDetails>
      <ProductDetails>{props.cloth.gender}</ProductDetails>
      <ProductDetails
        style={{
          justifySelf: "flex-end",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "right",
        }}
      >
        ₹{props.cloth.price}
      </ProductDetails>
    </Container>
  );
};

export default Products;
