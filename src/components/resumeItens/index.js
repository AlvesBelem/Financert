import React from "react";
import * as C from "./styles";

const ResumeItens = ({ title, Icon, value }) => {
  return (
    <C.container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.total>{value}</C.total>
    </C.container>
  );
};

export default ResumeItens;
