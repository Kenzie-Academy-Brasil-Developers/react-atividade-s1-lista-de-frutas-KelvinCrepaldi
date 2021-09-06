import "./style.css";

const FruitBox = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((fruit) => (
          <li>{fruit.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FruitBox;
