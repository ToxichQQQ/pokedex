import React, { FC } from "react";
import { Typography } from "antd";
import "./Header.css";

interface HeaderProps {
  title: string;
  level?: 5 | 4 | 3 | 2 | 1 | undefined;
}

export const Header: FC<HeaderProps> = ({ title, level }) => {
  const { Title } = Typography;
  return (
    <Title className="header" level={level}>
      {title}
    </Title>
  );
};
