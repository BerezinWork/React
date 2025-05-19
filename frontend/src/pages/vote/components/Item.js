import { useContext } from "react";

import { VoteContext } from "../../../contexts/VoteContext";

import "./VoteItem.css";

export default function VoteItem({
    smile = {},
}) {
    const { toggleSmile } = useContext(VoteContext);

    const handleToggle = () => {
        toggleSmile(smile.id);
    }

    return (
        <div className="voteItem"
             onClick={handleToggle}
        >
            <img src={smile.img} alt="Smile image" />
            <div>{smile.votes}</div>
        </div>
    )
}