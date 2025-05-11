import React from 'react';

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        console.log(this.props);
    }

    increment = () => {
        this.setState( (prevState) => {
            return {count: prevState.count + 1};
        })
        this.setState( (prevState) => {
            return {count: prevState.count + 1};
        })
    }

    render() {
        return (
            <>
                <div>
                    <span>Hello, Im first React component!</span>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default FirstComponent;