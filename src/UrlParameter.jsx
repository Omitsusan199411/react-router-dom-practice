import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>URLparameterページです</h1>
      <p>URLパラメーターは{id}です。</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
