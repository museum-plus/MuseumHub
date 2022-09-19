import { TextareaAutosize } from "@mui/material";
import React from "react";
import "./BeepconsGlassItem";
export default function BeepconsItemInfo(props) {
  return (
    <>
      {props.showInput ? (
        props.title == true ? (
          <TextareaAutosize
            style={{ width: "100%" , userSelect: "revert"}}
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
            style={{ width: "100%", userSelect: "revert"}}
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

          props.value

      )}
    </>
  );
}
