import { useContext } from "react";

import { VoteContext } from "../../../contexts/VoteContext";

import "./VoteResult.css";

export default function VoteResult() {
    const { winner } = useContext(VoteContext);

    if(!winner) {
        return <div className="resultPreloader">Press the button to get the winner!</div>;
    } else if (!winner.votes) {
        return <div className="resultPreloader">Vote to get the winner!</div>;
    }

    return (
        <div className="resultContainer">
            <h2 className="resultTitle">
                Vote Result
            </h2>
            <div className="resultBody">
                <h3>The Winner is</h3>
                <img src={winner.img} alt="ImageWinner" className="resultImg" />
                <div>Number of votes: {winner.votes}</div>
            </div>
        </div>
    )
}