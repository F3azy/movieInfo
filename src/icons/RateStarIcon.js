import React from "react";
import { Icon } from "@chakra-ui/react";

const RateStarIcon = ({ Offset, id }) => {
  return (
    <Icon
      width="8"
      height="8"
      viewBox="0 0 96 91"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset={Offset}
            style={{ stopColor: "#BA181B", stopOpacity: "1" }}
          />
          <stop
            offset={Offset}
            style={{ stopColor: "#0B090A", stopOpacity: "1" }}
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad${id})`}
        d="M48 0L61.2252 31.7971L95.5528 34.5491L69.3988 56.9529L77.3893 90.4509L48 72.5L18.6107 90.4509L26.6012 56.9529L0.447174 34.5491L34.7748 31.7971L48 0Z"
      />
    </Icon>
  );
};

export default RateStarIcon;
