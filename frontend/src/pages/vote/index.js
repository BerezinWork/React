import { useState, useEffect } from 'react';

import VoteHeader from "./components/Header";
import VoteList from "./components/List";

import "./style.css";
import VoteResult from "./components/Result";

export default function Vote() {

    const [smiles, setSmiles] = useState([
        {id:1, img: "/img/vote/01.png", votes: 0},
        {id:2, img: "/img/vote/02.png", votes: 0},
        {id:3, img: "/img/vote/03.png", votes: 0},
    ]);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedSmiles = localStorage.getItem("smiles");
        if (savedSmiles) {
            setSmiles(JSON.parse(savedSmiles));
        }
    }, [])

    const toggleSmile = (id) => {
        setSmiles(prevState => {
            const updatedSmiles = prevState.map(smile =>
                smile.id === id ? {...smile, votes: smile.votes + 1} : smile
            );

            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return updatedSmiles;
        })
    }

    const findWinner = () => {
        const winner = smiles.reduce((max, smile) =>
            smile.votes > max.votes ? smile : max);
        setWinner(winner);
    }

    const clearVotes = () => {
        localStorage.removeItem("smiles");

        setSmiles(prevState => {
            const updatedSmiles = prevState.map(smile => ({
                ...smile,
                votes: 0,
            }));

            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return updatedSmiles;
        });

        setWinner(null);
    }

    return (
        <div className="voteContainer">
            <VoteHeader/>
            <VoteList
                smiles={smiles}
                toggleSmile={toggleSmile}
                findWinner={findWinner}
                clearVotes={clearVotes}
            />
            <VoteResult
                winner={winner}
            />
        </div>
    )
}