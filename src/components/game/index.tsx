import React, { useState } from 'react';
import { Resultado, Options, PCSide, LabelPC, LabelPlayer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHand, faHandPeace } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Game() {

    const [option, setOption] = useState('');
    const [PCOptions, setPCOptions] = useState(['rock', 'paper', 'scissors']);


    return (
        <div className='d-flex flex-column justify-content-center align-between' style={{'height' : '90vh'}}>
            <PCSide className='row mx-5 p-2 justify-content-center align-items-center'>
                <LabelPC>PC</LabelPC>
                <FontAwesomeIcon icon={faHandRock} size='5x' className='col-3'/>
                <FontAwesomeIcon icon={faHand} size='5x' className='col-3'/>
                <FontAwesomeIcon icon={faHandPeace} size='5x' className='col-3'/>
            </PCSide>
            <Resultado className='row mx-5 p-2 justify-content-center mt-4'>
                <h2 className='col-lg-12 pt-3 text-center'>Choose your option</h2>
                TAMANHO 4
            </Resultado>
            <Options className='row mx-5 p-2 justify-content-center align-items-center mt-4'>
                <LabelPlayer>YOU</LabelPlayer>
                <FontAwesomeIcon icon={faHandRock} size='5x' className='col-3' onClick={() => setOption('rock')} />
                <FontAwesomeIcon icon={faHand} size='5x' className='col-3' onClick={() => setOption('paper')} />
                <FontAwesomeIcon icon={faHandPeace} size='5x' className='col-3' onClick={() => setOption('scissors')} />
            </Options>
        </div>
    )
}