import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import "./styles.css";

export default function StyledSelect({ control }) {
  const options = [
    { label: "Primeiro módulo", value: "Trimeiro Modulo" },
    { label: "Segundo módulo", value: "Segundo Modulo" },
    { label: "Terceiro módulo", value: "Terceiro Modulo" },
  ];

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
      <Controller
        name="course_module"
        control={control}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            options={options}
            styles={customStyles}
            width="265px"
            menuColor="#868E96"
            menuPlacement="top"
            value={options.find((module) => module.value === value)}
            onChange={(options) => {
              onChange(options.value);
            }}
            placeholder="Selecione o seu módulo"
            isSearchable
          />
        )}
        name={"module"}
      />
    </div>
  );
}
