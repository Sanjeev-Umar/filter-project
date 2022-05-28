import { CLOTHES } from "./DUMMY_DATA";
import { useState } from "react";
import FilterBar from "./Components/FilterBar";
import Card from "./Components/Card";
import ProductContainer from "./Components/ProductsContainer";
import styled from "styled-components";
import Products from "./Components/Products";

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 6px 0;
`;

function App() {
  const [filterState, setFilterState] = useState({
    color: "none",
    gender: "none",
    size: "none",
    sortByPrice: "none",
  });
  

  const onSort = (e) => {
    setFilterState((prev) => {
      return { ...prev, sortByPrice: e.target.value };
    });
  };

  const result = CLOTHES.filter((cloth) => {
    if (filterState.color === "none") return cloth;

    if (cloth.color === filterState.color) {
      return cloth;
    }
  })
    .filter((cloth) => {
      if (filterState.size === "none") return cloth;

      if (cloth.size === filterState.size) {
        return cloth;
      }
    })
    .filter((cloth) => {
      if (filterState.gender === "none") return cloth;

      if (cloth.gender === filterState.gender) {
        return cloth;
      }
    })
    .sort((a, b) => {
      if (filterState.sortByPrice === "asc") {
        return a.price - b.price;
      } else if (filterState.sortByPrice === "des") {
        return b.price - a.price;
      } else {
        return a.price === b.price;
      }
    })
    .map((cloth, i, arr) => {
      return <Products key={i} cloth={cloth}></Products>;
    });

  return (
    <Card>
      <FilterBar setFilterState={setFilterState}></FilterBar>
      <SortContainer>
        <label style={{ marginRight: "8px" }} htmlFor="sort">
          Sort by Price
        </label>
        <select
          id="sort"
          defaultValue="none"
          style={{ width: 120 }}
          onChange={onSort}
        >
          <option value="none">None</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
      </SortContainer>
      <ProductContainer>
        {result.length === 0 ? <div>No product Found</div> : result}
      </ProductContainer>
    </Card>
  );
}

export default App;
