import React from 'react';

export default class HideableText extends React.Component{
    constructor(props) {
        super(props);
        this.State={
            isHidden: false,
        }
    }

    toggleIsHidden(){
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
        }));

    }
    render(){
        return(
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                {this.props.isHidden&& this.props.text}
            </div>

        )
    }
}
