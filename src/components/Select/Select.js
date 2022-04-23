import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import "./styles.css";

const optionsTheme = (theme) => {
  return {
    ...theme,

    colors: {
      danger: "transparent",
      dangerLight: "transparent",
      neutral0: "#343B41",
      neutral5: "transparent",
      neutral10: "transparent",
      neutral20: "transparent",
      neutral30: "#FFFFFF",
      neutral40: "#FFFFFF",
      neutral50: "#FFFFFF",
      neutral60: "#FFFFFF",
      neutral70: "hsl(0, 0%, 30%)",
      neutral80: "#FFFFF",
      neutral90: "transparent",
      primary: "#FF577F",
      primary50: "#FFFFFF",
      primary75: "transparent",
    },
  };
};

export default function StyledSelect({
  control,
  options,
  placeholder,
  valueName,
}) {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,

      padding: 20,
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
        name={valueName}
        control={control}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            theme={optionsTheme}
            options={options}
            // styles={customStyles}
            width="265px"
            menuColor="#868E96"
            menuPlacement="top"
            value={options.find((module) => module.value === value)}
            onChange={(options) => {
              onChange(options.value);
            }}
            placeholder={placeholder}
            isSearchable
          />
        )}
      />
    </div>
  );
}
