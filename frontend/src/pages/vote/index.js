import VoteHeader from "./components/Header";
import VoteList from "./components/List";

import VoteProvider from "../../contexts/VoteContext";

import "./style.css";
import VoteResult from "./components/Result";

export default function Vote() {

    return (
        <div className="voteContainer">
            <VoteProvider>
                <VoteHeader/>
                <VoteList/>
                <VoteResult/>
            </VoteProvider>
        </div>
    )
}