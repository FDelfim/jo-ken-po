import React, {useState} from 'react';


export default function Resultado(porps: {option: string, points: number}){
    
    const [PCOptions, setPCOptions] = useState(['paper', 'rock', 'scissors']);
    const [option, setOption] = useState(porps.option);

    const result = (props: [string, string]) => {
        return (
            <div className='text-center'>
                <h1>{props[0]}</h1>
                <h2>PC chooses {props[1]}</h2>
                <button className='btn btn-primary' onClick={() => setOption('')}>Play Again</button>
            </div>
        )
    }

    const compareOptions = () => {
        let selected =  PCOptions[Math.floor(Math.random() * PCOptions.length)];
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
    
    return(
        <div className='text-center'>
            {option == '' ? <h1 className='text-center'>Choose an option</h1> : compareOptions()}
        </div>
    )
}