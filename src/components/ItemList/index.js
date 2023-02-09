import "./index.css";

const ItemList = (props) => {
  const { itemDetails } = props;
  const { at, author, like, reply, text } = itemDetails;
  return (
    <div>
      <li className="list-items">
        <p>{at}</p>
        <p>{author}</p>
        <p>{like}</p>
        <p>{reply}</p>
        <p>{text}</p>
      </li>
      <hr />
    </div>
  );
};

export default ItemList;
