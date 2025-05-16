import "./VoteItem.css";

export default function VoteItem({
    smile = {},
    toggleSmile = () => {}
}) {
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