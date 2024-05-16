import './App.css'
import './LotteyBall/LotteryBall'
import LotteryBall from "./LotteyBall/LotteryBall";

const App = () => {

    const randomNumbers = () => {

    }

    return (
        <>
            <div className='lottery-ball'>
                <LotteryBall number={5} />
                <LotteryBall number={5} />
                <LotteryBall number={5} />
                <LotteryBall number={5} />
                <LotteryBall number={5} />
            </div>
            <button onClick={randomNumbers}>Click me</button>
        </>
    )
}

export default App
