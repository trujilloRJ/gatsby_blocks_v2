import React from "react"

export default function right_arrow({ width, height, color, strC, strW }) {
  return (
    <svg
      width={width || "105"}
      height={height || "128"}
      viewBox="0 0 105 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd)">
        <path
          d="M96.4521 52.4632C101.893 56.0145 101.893 63.9855 96.4521 67.5368L18.419 118.466C12.4326 122.373 4.5 118.077 4.5 110.929L4.5 9.07115C4.50001 1.92263 12.4326 -2.37271 18.419 1.53432L96.4521 52.4632Z"
          fill={color || "#333333"}
        />
        <path
          d="M95.6322 66.2807L17.5992 117.21C12.6105 120.465 6 116.886 6 110.929L6 9.07116C6.00001 3.11405 12.6105 -0.465402 17.5991 2.79046L95.6322 53.7193C100.167 56.6788 100.167 63.3212 95.6322 66.2807Z"
          stroke={strC || "white"}
          strokeWidth={strW || "3"}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0.5"
          y="0.0562592"
          width="104.033"
          height="127.887"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
