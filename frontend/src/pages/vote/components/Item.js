import React from "react";

import "./VoteItem.css";

class VoteItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.toggleSmile(this.props.smile.id);
    }

    render() {
        return(
            <div className="voteItem"
                 onClick={this.handleToggle}
            >
                <img src={this.props.smile.img} alt="Smile image" />
                <div>{this.props.smile.votes}</div>
            </div>
        )
    }
}

export default VoteItem;