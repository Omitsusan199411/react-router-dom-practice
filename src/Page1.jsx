import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  console.log(history);

  const onClickDetailsA = () =>
    history.push({ pathname: "/page1/detailA", state: arr });

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailsA}>DetalAへ</button>
    </div>
  );
};
