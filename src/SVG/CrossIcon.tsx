import React from "react";

const CrossIcon = (props: any) => {
  const { closeModal } = props;

  return (
    <div>
      <svg
        fill="#000000"
        width="32px"
        height="32px"
        viewBox="-2 -2 24.00 24.00"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        stroke-width="1.7"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
        style={{
          float: "right",
          marginTop: "-10px",
          marginRight: "-10px",
          cursor: "pointer",
        }}
        className="select-none  trnsition-all disabled:opacity-50 disabled:shadow-none shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.5] active:shadow-none"
        onClick={() => closeModal()}
      >
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0"
          transform="translate(3.7,3.7), scale(0.63)"
        >
          <rect
            x="-2"
            y="-2"
            width="24.00"
            height="24.00"
            rx="12"
            fill="#ffffff"
            strokeWidth="0"
          ></rect>
        </g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="0.08"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm4.789 11.461L13.06 14.79 10 11.729l-3.061 3.06L5.21 13.06 8.272 10 5.211 6.939 6.94 5.211 10 8.271l3.061-3.061 1.729 1.729L11.728 10l3.061 3.061z"></path>
        </g>
      </svg>
    </div>
  );
};

export default CrossIcon;
