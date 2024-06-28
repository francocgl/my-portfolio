import React from "react";
import { MenuLinks } from "../../../typings/MenuLinks";

const MobileMenuItem = ({
  item,
  onClick,
}: {
  item: MenuLinks;
  onClick: () => void;
}) => {
  return (
    <li className="pt-10 pb-10" onClick={onClick}>
      <a
        href={item.link}
        className="text-5xl font-normal underline block"
        aria-label={`Navigate to section ${item.name}`}
      >
        {item.name}
      </a>
    </li>
  );
};

export default MobileMenuItem;
