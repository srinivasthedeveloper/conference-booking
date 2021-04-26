import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    city,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    HandsOn,
    certification,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique city
  let people = getUnique(rooms, "city");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="Find Yours Now" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Technology/Domain</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* city  */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            name="city"
            id="city"
            onChange={handleChange}
            className="form-control"
            value={city}
          >
            {people}
          </select>
        </div>
        {/* end of city */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">conference price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice> -1?minPrice:0}
            max={maxPrice> -1?maxPrice:0}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">Duration</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize>=0?minSize:0}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="HandsOn"
              id="HandsOn"
              checked={HandsOn}
              onChange={handleChange}
            />
            <label htmlFor="HandsOn">HandsOn</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="certification"
              checked={certification}
              onChange={handleChange}
            />
            <label htmlFor="certification">certification</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
