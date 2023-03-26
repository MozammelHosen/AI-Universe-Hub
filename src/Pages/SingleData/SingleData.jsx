import React from "react";

const SingleData = (props) => {
  const { image, published_in, name, features } = props.data;
  console.log(props);
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px] w-[500px] pt-2" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">features!</h2>
          <div>
            {features.map((feature, index) => (
              <p>
                {index + 1}. {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="divider mx-5 mb-5"></div>
        <div className="flex justify-between items-center mx-5">
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="flex mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>

              <h2>{published_in}</h2>
            </div>
          </div>
          <div className="bg-red-300 rounded-2xl p-1">
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleData;
