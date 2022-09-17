import React from "react";
import "./BeepconsGlass.css";
import Punto from "../TurnoGlass/Punto";
import BeepconsGlassItem from "./BeepconsGlassItem";
import { TextareaAutosize } from "@mui/material";
import { Modal } from "@mui/material";
import plus from "../../assets/plus.svg";
import { motion } from "framer-motion";
import "./beepcons-modal.css";
export default function BeepconsGlass() {
  const [open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <motion.div
        className="beepcons-glass"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="beepcons-glass__header">
          <div className="beepcons-glass__header__text">
            Beepcons
            <div className="beepcons-icon-punto">
              <Punto color="#fff" />
            </div>
          </div>
          <div className="beepcons-glass__header__icon" onClick={openModal}>
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="beepcons-glass__body">
          {/* <div className='beepcons-glass__body__content'> */}
          {/* <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 1"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 2"
            desc="Essssssssssssssssssssssssssssssssssssss"
          />
          <BeepconsGlassItem
            color="#78F165"
            punto="Punto 3"
            desc="gggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 4"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 5"
            desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          />
          <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 4"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 5"
            desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          />
          <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 4"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 5"
            desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          />
          <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 4"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 5"
            desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          />
          <BeepconsGlassItem
            color="#9F51DD"
            punto="Punto 4"
            desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <BeepconsGlassItem
            color="#E1B74A"
            punto="Punto 5"
            desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" */}
          {/* /> */}
          {/* </div> */}
        </div>
      </motion.div>
      <Modal open={open}>
        <div className="beepcons_modal">
          <div className="beepcons-modal__row1">
            <div className="beepcons-modal__title">Añadir Beepcon</div>
            <div className="beepcons-modal__inputs">
              <span className="beepcons-modal__input1__label">Nombre</span>
              <input type="text" className="beepcons-modal__input1" />

              <div className="beepcons-modal__input__group">
                <span className="beepcons-modal__input2__label">
                  Descripcion
                </span>
                <TextareaAutosize
                  aria-label="empty textarea"
                  className="beepcons-modal__input2"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="beepcons-modal__row2"></div>
        </div>
      </Modal>
    </>
  );
}
