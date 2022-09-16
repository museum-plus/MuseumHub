import React from 'react'
import './MuseoGlass.css'
export default function MuseoGlass() {
    return (
        <>
            <div className='museo-glass__header'>
                <div className="museo-glass__header__text">
                    Museo Nacional de Bellas Artes
                </div>
            </div>
            <div className='museo-glass__body'>
                <div className='museo-glass__body__content'>
                    <div className='museo-glass__body__content__text'>
                        museo nacional bellas artes descripcion museo nacional bellas artes descripcion museo nacional bellas artes descripcion museo nacional bellas artes descripcion museo nacional bellas artes descripcion
                    </div>
                    <div className='museo-glass__body__content__info'>
                        <div className='museo-glass__body__content__info__header'>
                            Ubicación
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Provincia
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Ciudad
                        </div>
                        <div className='museo-glass__body__content__info__text'>
                            Calle
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
