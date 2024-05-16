import React from "react";
import './LotteryBall.css'

interface Props {
    number: number
}

const LotteryBall: React.FC<Props> = (props) => {
    return (
        <div className="lottery-number">
            <div>{props.number}</div>
        </div>
    );
};

export default LotteryBall;