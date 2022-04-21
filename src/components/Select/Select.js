import React from "react";
import { FaColumns } from "react-icons/fa";
import Select from "react-select";
import "./styles.css";
const options = [
  { label: "Primeiro módulo", value: "primeiroModulo" },
  { label: "Segundo módulo", value: "segundoModulo" },
  { label: "Terceiro módulo", value: "terceiroModulo" },
];

export default function StyledSelect() {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      color: state.selectProps.menuColor,
      padding: 20,
      backgroundColor: "#343B41",
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FF577F" : "#212529",
      borderRadius: "4px",
      marginBottom: "4px",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="container-select">
      <Select
        options={options}
        styles={customStyles}
        width="265px"
        menuColor="#868E96"
        menuPlacement="top"
      />
    </div>
  );
}
