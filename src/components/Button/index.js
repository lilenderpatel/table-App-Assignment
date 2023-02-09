import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import "./index.css";

const Button = (props) => {
  const { value } = props;
  let arr = [];

  for (let i = 1; i <= value; i++) {
    arr.push(i);
  }
  return (
    <div className="button1-style">
      <button className="first" type="button">
        First
      </button>
      <button type="button">
        <RxDoubleArrowLeft />
      </button>
      {arr.map((each) => (
        <button key={each} type="button">
          {each}
        </button>
      ))}
      <button type="button">
        <RxDoubleArrowRight />
      </button>
      <button className="first" type="button">
        Last
      </button>
    </div>
  );
};

export default Button;
