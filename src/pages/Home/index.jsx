import React from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input";
import kenzieIcon from "../../assets/kenzieIcon.svg";
export default function Home({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <nav>
        <img src={kenzieIcon} alt="logo" />
        <Buttonn>Sair</Buttonn>
      </nav>
    </>
  );
}
