import React from 'react'
import Punto from '../TurnoGlass/Punto'

import './BeepconsGlassItem.css'
export default function BeepconsGlassItem() {
  return (
    <div className='beepcons-container__item'>
      <div className='beepcons-container__item__header'>
          <div className='beepcons-container__item__header__punto'>
            <Punto color="#ab1234"/>
          </div>
          Punto 1
      </div>
      <div className='beepcons-container__item__body'>
        <div className='beepcons-container__item__body__text'>
          holAASDFAFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        </div>
      </div>
    </div>
  )
}
