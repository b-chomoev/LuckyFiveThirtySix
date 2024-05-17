import './App.css'
import './LotteyBall/LotteryBall'
import LotteryBall from "./LotteyBall/LotteryBall";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const randomNumbers = () => {
        setNumbers([
            Math.floor(Math.random() * (10 - 5) + 5),
            Math.floor(Math.random() * (15 - 11) + 11),
            Math.floor(Math.random() * (22 - 16) + 16),
            Math.floor(Math.random() * (31 - 23) + 23),
            Math.floor(Math.random() * (36 - 32) + 32)
        ])
    }

    return (
        <>
            <div className='lottery-ball'>
                <LotteryBall number={numbers[0]} />
                <LotteryBall number={numbers[1]} />
                <LotteryBall number={numbers[2]} />
                <LotteryBall number={numbers[3]} />
                <LotteryBall number={numbers[4]} />
            </div>
            <button onClick={randomNumbers}>New Numbers</button>
        </>
    )
}

export default App