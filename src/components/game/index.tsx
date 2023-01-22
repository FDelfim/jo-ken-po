import React, { useState } from 'react';
import { Resultado, Options, PCSide, LabelPC, LabelPlayer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHand, faHandPeace } from '@fortawesome/free-solid-svg-icons';
import ResultadoC from './resultado';

import './styles.css';

export default function Game(props: { points: number }) {

    const [option, setOption] = useState('');
    const [points, setPoints] = useState(props.points);

    return (
        <div className='d-flex flex-column justify-content-center align-between' style={{ 'height': '90vh' }}>
            <PCSide className='row mx-5 p-2 row justify-content-center align-items-center'>
                <LabelPC className='mb-4'>PC</LabelPC>
                <div className='row justify-content-between align-items-center'>
                    <a className='col-3 col-lg-4 d-flex justify-content-center link-light'><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHandRock}/></a>
                    <a className='col-3 col-lg-4 d-flex justify-content-center link-light'><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHand}/></a>
                    <a className='col-3 col-lg-4 d-flex justify-content-center link-light'><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHandPeace} /></a>
                </div>
            </PCSide>
            <Resultado className='row mx-5 p-2 justify-content-center align-items-center mt-4'>
                <ResultadoC option={option} points={points} />
            </Resultado>
            <Options className='row mx-5 p-2 justify-content-center align-items-center mt-4'>
                <LabelPlayer className='mb-4'>YOU</LabelPlayer>
                <div className='row justify-content-between align-items-center'>
                    <a className='col-3 d-flex justify-content-center link-light' style={{ 'cursor': 'pointer' }} onClick={() => setOption('rock')}><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHandRock} /></a>
                    <a className='col-3 d-flex justify-content-center link-light' style={{ 'cursor': 'pointer' }} onClick={() => setOption('paper')}><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHand} /></a>
                    <a className='col-3 d-flex justify-content-center link-light' style={{ 'cursor': 'pointer' }} onClick={() => setOption('scissors')} ><FontAwesomeIcon style={{ 'height': '3em'}} icon={faHandPeace} /></a>
                </div>
            </Options>
        </div>
    )
}