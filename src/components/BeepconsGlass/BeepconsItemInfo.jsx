import { TextareaAutosize } from "@mui/material";
import React from "react";
import './BeepconsGlassItem'
export default function BeepconsItemInfo(props) {
    return (
        <span>
            {
                props.showInput ? (
                    props.title == true ? (
                        <TextareaAutosize
                            style={{ width: "100%" }}
                            className="item-text-area-title"
                            type="text"
                            value={props.value}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            autoFocus />
                    ) : (
                        <TextareaAutosize
                            style={{ width: "100%" }}
                            className="item-text-area"
                            type="text"
                            value={props.value}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            autoFocus />
                    )
                ) : (
                    <span
                        onDoubleClick={props.handleDoubleClick}
                        style={{
                            height: "25px",
                            width: "auto",
                        }}
                    >
                        {props.value}
                    </span>
                )
            }
        </span>
    );
}

