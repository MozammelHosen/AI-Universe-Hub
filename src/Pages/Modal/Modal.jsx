import React from "react";

const Modal = (props) => {
  const { description, image_link, accuracy, pricing, features, integrations } =
    props.modalData;
  console.log(props.modalData);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={image_link ? image_link[0] : "Not Aviable"}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-xl font-bold">{description}</h1>
                <div>
                  {/* {pricing?.map((price) => {
                    <>console.log(price)</>;
                  })} */}
                </div>
                <div className="flex justify-between  mx-5 mt-3">
                  <div>
                    <h1 className="text-xl font-bold">Features</h1>
                    {Object.values(features || {}).map((value) => (
                      <ul>
                        <li>
                          {value ? value.feature_name : "No Data Avaiable"}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Integrations</h1>
                    {integrations.map((integration) => (
                      <ul>
                        <li>
                          {integration ? integration : "Not Data Avaiable"}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
