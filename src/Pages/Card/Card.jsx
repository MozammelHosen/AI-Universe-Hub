import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  //   Data Fetch
  useEffect(() => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // console.log(data.data.tools);
        setDatas(data.data.tools);
      });
  }, []);

  //   Loading Compones
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* Data Map another Compones Data Transfer  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {datas.map((data) => (
          <SingleData data={data} key={data.id}></SingleData>
        ))}
      </div>
    </>
  );
};

export default Card;
