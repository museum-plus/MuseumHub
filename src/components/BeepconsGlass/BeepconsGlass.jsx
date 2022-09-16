import React from 'react'
import './BeepconsGlass.css'
import Punto from '../TurnoGlass/Punto'
import BeepconsGlassItem from './BeepconsGlassItem'
import plus from "../../assets/plus.svg";

export default function BeepconsGlass() {
    return (
            <div className='beepcons-glass'>
                <div className='beepcons-glass__header'>
                    <div className="beepcons-glass__header__text">
                        Beepcons
                        <div className='beepcons-icon-punto'>
                            <Punto color="#fff"/>
                        </div>
                    </div>
                        <div className="beepcons-glass__header__icon">
                            <img src={plus} alt="" />
                        </div>
                </div>
                <div className='beepcons-glass__body'>
                    {/* <div className='beepcons-glass__body__content'> */}
                        <BeepconsGlassItem color="#9F51DD" desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                        <BeepconsGlassItem color="#E1B74A" desc="Essssssssssssssssssssssssssssssssssssss"/>
                        <BeepconsGlassItem color="#78F165" desc="gggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>    
                        <BeepconsGlassItem color="#9F51DD" desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                        <BeepconsGlassItem color="#E1B74A" desc="Essssssssssssssssssssssssssssssssssssssffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"/>
                        <BeepconsGlassItem color="#78F165" desc="gggggggggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggg"/>    
                        <BeepconsGlassItem color="#9F51DD" desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                        <BeepconsGlassItem color="#E1B74A" desc="Essssssssssssssssssssssssssssssssssssss"/>
                        <BeepconsGlassItem color="#78F165" desc="gggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>    
                        <BeepconsGlassItem color="#9F51DD" desc="holaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                        <BeepconsGlassItem color="#E1B74A" desc="Essssssssssssssssssssssssssssssssssssss"/>
                        <BeepconsGlassItem color="#78F165" desc="gggggggggggggggolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssssssssssssssssssssss"/>    
                    {/* </div> */}
                </div>
            </div>
    )
}
