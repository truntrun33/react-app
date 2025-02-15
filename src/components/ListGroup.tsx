import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "Taipei", "Tokyo", "Berlin", "Istanbul"];
  items = [];

  return (
    //or just <></>
    <Fragment>
      <h1>List</h1>
      {/* if false go straight to the next one. If true, show No item*/}
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
