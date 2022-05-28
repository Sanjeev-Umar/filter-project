import styled from "styled-components";

const FilterContainer = styled.div`
  background-color: #333;
  padding: 10px 7px;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
`;

const FilterComponents = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-evenly;
`;

const FilterBar = (props) => {
  const onColorChange = (e) => {
    props.setFilterState((prev) => {
      return { ...prev, color: e.target.value };
    });
  };
  const onSizeChange = (e) => {
    props.setFilterState((prev) => {
      return { ...prev, size: e.target.value };
    });
  };
  const onGenderChange = (e) => {
    props.setFilterState((prev) => {
      return { ...prev, gender: e.target.value };
    });
  };

  return (
    <FilterContainer>
      <FilterComponents>
        <label htmlFor="color">Color</label>
        <select
          id="color"
          defaultValue="none"
          style={{ width: 120 }}
          onChange={onColorChange}
        >
          <option value="none">None</option>
          <option value="red">Red</option>
          <option value="pink">Pink</option>
          <option value="khaki">khaki</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
        </select>
      </FilterComponents>
      <FilterComponents>
        <label htmlFor="size">Size</label>
        <select
          id="size"
          defaultValue="none"
          style={{ width: 120 }}
          onChange={onSizeChange}
        >
          <option value="none">None</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>
      </FilterComponents>
      <FilterComponents>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          defaultValue="none"
          style={{ width: 120 }}
          onChange={onGenderChange}
        >
          <option value="none">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FilterComponents>
    </FilterContainer>
  );
};

export default FilterBar;
