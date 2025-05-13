import React from "react";

import VoteHeader from "./components/Header";
import VoteList from "./components/List";

import "./style.css";
import VoteResult from "./components/Result";

class Vote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {id:1, img: "/img/vote/01.png", votes: 0},
                {id:2, img: "/img/vote/02.png", votes: 0},
                {id:3, img: "/img/vote/03.png", votes: 0},
            ],
            winner: null
        }
    }

    componentDidMount() {
        const savedSmiles = localStorage.getItem("smiles");
        if (savedSmiles) {
            this.setState({ smiles: JSON.parse(savedSmiles) });
        }
    }

    toggleSmile = (id) => {
        this.setState((prevState) => {
            const updatedSmiles = prevState.smiles.map((smile) => {
                if (smile.id === id) {
                    return {...smile, votes: smile.votes + 1};
                }
                return smile;
            })

            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));

            return {smiles: updatedSmiles};
        })
    }

    findWinner = () => {
        const { smiles } = this.state;
        const maxVotes = Math.max(...smiles.map((smile) => smile.votes));
        const winner = smiles.find((smile) => smile.votes === maxVotes);
        this.setState({winner: winner});
    }

    clearVotes = () => {
        localStorage.removeItem("smiles");
        window.location.reload();
    }

    render() {
        return(
            <div className="voteContainer">
                <VoteHeader/>
                <VoteList
                    smiles={this.state.smiles}
                    toggleSmile={this.toggleSmile}
                    findWinner={this.findWinner}
                    clearVotes={this.clearVotes}
                />
                <VoteResult
                    winner={this.state.winner}
                />
            </div>
        )
    }
}

export default Vote;