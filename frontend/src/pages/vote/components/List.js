import { useContext } from "react";

import { VoteContext } from "../../../contexts/VoteContext";

import VoteItem from "./Item";

import "./VoteList.css";

export default function VoteList() {
    const {
        smiles = [],
        toggleSmile = () => {},
        findWinner = () => {},
        clearVotes = () => {}
    } = useContext(VoteContext);

    return (
        <>
            <div className="voteList">
                {smiles.map((smile) => {
                    return <VoteItem
                        key={smile.id}
                        smile={smile}
                        toggleSmile={toggleSmile}
                    />
                })}
            </div>
            <div className="buttonsContainer">
                <button className="resultButton"
                        onClick={findWinner}
                >
                    Show Result
                </button>
                <button className="resultButton"
                        onClick={clearVotes}
                >
                    Clear Votes
                </button>
            </div>
        </>
    )
}