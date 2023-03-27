import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [datas, setDatas] = useState([]);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  // uniqueId
  useEffect(() => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // console.log(data);
        setModalData(data.data);
      });
  }, [uniqueId]);
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

  const handleBtn = () => {
    setShowAll(true);
  };
  return (
    <>
      {/* Data Map another Compones Data Transfer  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {datas?.slice(0, showAll ? 12 : 6).map((data) => (
          <SingleData
            data={data}
            key={data.id}
            setUniqueId={setUniqueId}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleBtn}>
          <Button>See More</Button>
        </span>
      )}
      <Modal modalData={modalData}></Modal>
    </>
  );
};

export default Card;
