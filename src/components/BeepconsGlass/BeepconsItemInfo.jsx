import { TextareaAutosize, useThemeProps } from "@mui/material";
import React, { useContext } from "react";
import ThemeContext from "../../context/theme-context";
import "./BeepconsGlassItem";
export default function BeepconsItemInfo(props) {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      {props.showInput ? (
        props.title == true ? (
          <TextareaAutosize
            style={theme.input}
            className="item-text-area-title"
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                props.handleBlur();
                props.sendEditedValues();
              }
            }}
          />
        ) : (
          <TextareaAutosize
            style={theme.color}
            className="item-text-area"
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                props.handleBlur();
                props.sendEditedValues();
              }
            }}
          />
        )
      ) : (
        <span
          onDoubleClick={props.handleDoubleClick}
          style={theme.color}
        >
          {props.value}
        </span>

      )}
    </>
  );
}
