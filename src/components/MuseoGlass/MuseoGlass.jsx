import React from 'react'
import './MuseoGlass.css'
import { getMuseum } from "../../database/getBeepcons";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export default function MuseoGlass() {
    const [museo, setMuseo] = React.useState({});
    React.useEffect(() => {
        async function get() {
            let museo = await getMuseum();
            setMuseo(museo[0]);
        }
        get();
      }, []);
      console.log(museo)
    return (
        <>
            <div className='museo-glass__header'>
                <div className="museo-glass__header__text">
                    {museo.nombre}
                </div>
            </div>
            <div className='museo-glass__body'>
                <div className='museo-glass__body__content'>
                    <div className='museo-glass__body__content__text'>
                        {museo.descripcion}
                    </div>
                    <div className='museo-glass__body__content__info'>
                        <div className='museo-glass__body__content__info__header'>
                            Dirección:
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Provincia: {museo.direccion.provincia}
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Ciudad: {museo.direccion.ciudad}
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Calle: {museo.direccion.calle}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
