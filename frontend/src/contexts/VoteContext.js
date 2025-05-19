import { createContext, useState, useCallback, useMemo, useEffect } from "react";

export const VoteContext = createContext(null);

export default function VoteProvider({ children }) {
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

    const toggleSmile = useCallback((id) => {
        setSmiles(prevState => {
            const updatedSmiles = prevState.map(smile =>
                smile.id === id ? {...smile, votes: smile.votes + 1} : smile
            );

            localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
            return updatedSmiles;
        })
    }, [])

    const findWinner = useCallback(() => {
        const winner = smiles.reduce((max, smile) =>
            smile.votes > max.votes ? smile : max);
        setWinner(winner);
    }, [smiles])

    const clearVotes = useCallback(() => {
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
    },[])

    const contextValue = useMemo(() => ({
        smiles,
        winner,
        toggleSmile,
        findWinner,
        clearVotes,
    }), [smiles, winner, toggleSmile, findWinner, clearVotes]);


    return(
        <VoteContext.Provider value={contextValue}>
            {children}
        </VoteContext.Provider>
    )
}