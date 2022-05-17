import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const goBackPageA = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={goBackPageA}>PageAに戻る</button>
    </div>
  );
};
