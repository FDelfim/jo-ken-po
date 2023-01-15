import React, { useState } from 'react';
import { Resultado, Options, PCSide, LabelPC, LabelPlayer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHand, faHandPeace } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

interface props {
    points: number;
}

export default function Game(props: { points: number }) {

    const [option, setOption] = useState('');
    const [PCOptions, setPCOptions] = useState(['rock', 'paper', 'scissors']);
    const [points, setPoints] = useState(props.points);

    const PCChoose = () => {
        let pc = PCOptions[Math.floor(Math.random() * PCOptions.length)];
        return pc;
    }

    const compareOptions = () => {
        let selected = PCChoose();
        if (option === 'rock') {
            if (selected === 'scissors') {
                return result(['You Win', selected])
            } else if (selected === 'paper') {
                return result(['You Lose', selected])
            } else {
                return result(['Draw', selected])
            }
        } else if (option === 'paper') {
            if (selected === 'rock') {
                return result(['You Win', selected])
            } else if (selected === 'scissors') {
                return result(['You Lose', selected])
            } else {
                return result(['Draw', selected])
            }
        } else if (option === 'scissors') {
            if (selected === 'paper') {
                return result(['You Win', selected])
            } else if (selected === 'rock') {
                return result(['You Lose', selected])
            } else {
                return result(['Draw', selected])
            }
        }
    }

    const result = (props: [string, string]) => {
        console.log(props[0]);
        if (props[0] === 'You Win') {
            setPoints(points + 1);
        } else if (props[0] === 'You Lose') {
            setPoints(points - 1);
        }
        return (
            <div className='text-center'>
                <h1>{props[0]}</h1>
                <h2>PC chooses {props[1]}</h2>
                <button className='btn btn-primary' onClick={() => setOption('')}>Play Again</button>
            </div>
        )
    }


    return (
        <div className='d-flex flex-column justify-content-center align-between' style={{ 'height': '90vh' }}>
            <PCSide className='row mx-5 p-2 justify-content-center align-items-center'>
                <LabelPC>PC</LabelPC>
                <FontAwesomeIcon icon={faHandRock} size='4x' className='col-3' />
                <FontAwesomeIcon icon={faHand} size='4x' className='col-3' />
                <FontAwesomeIcon icon={faHandPeace} size='4x' className='col-3' />
            </PCSide>
            <Resultado className='row mx-5 p-2 justify-content-center align-items-center mt-4'>
                {option == '' ? <h1 className='text-center'>Choose an option</h1> : compareOptions() }
            </Resultado>
            <Options className='row mx-5 p-2 justify-content-center align-items-center mt-4'>
                <LabelPlayer>YOU</LabelPlayer>
                <div className='row justify-content-center' >
                    <a className='col-lg-3 d-flex justify-content-center link-light' style={{'cursor' : 'pointer'}} onClick={() => setOption('rock')}><FontAwesomeIcon icon={faHandRock} size='4x'/></a>
                    <a className='col-lg-3 d-flex justify-content-center link-light' style={{'cursor' : 'pointer'}} onClick={() => setOption('paper')}><FontAwesomeIcon icon={faHand} size='4x' /></a>
                    <a className='col-lg-3 d-flex justify-content-center link-light' style={{'cursor' : 'pointer'}} onClick={() => setOption('scissors')} ><FontAwesomeIcon icon={faHandPeace} size='4x' /></a>
                </div>
            </Options>
        </div>
    )
}