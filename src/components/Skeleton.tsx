import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="125" r="125" />
    <rect x="0" y="274" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="86" />
    <rect x="0" y="414" rx="10" ry="10" width="106" height="30" />
    <rect x="51" y="436" rx="0" ry="0" width="9" height="3" />
    <rect x="127" y="413" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
