import React from "react";
import VoteItem from "./Item";

import "./VoteList.css";

class VoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { smiles, toggleSmile, findWinner, clearVotes} = this.props;
        return(
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
}

export default VoteList;