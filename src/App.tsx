import './App.css'
import './LotteyBall/LotteryBall'
import LotteryBall from "./LotteyBall/LotteryBall";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const randomNumbers = () => {

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
            <button onClick={randomNumbers}>Change Numbers</button>
        </>
    )
}

export default App
