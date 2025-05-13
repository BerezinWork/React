import React from "react";

import "./VoteHeader.css";

class VoteHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1 className="voteHeader">
                Vote for best smile
            </h1>
        )
    }
}

export default VoteHeader;