import React, {Component} from 'react';

class Country extends Component{
    render(){
        return(
            <div onClick={this.props.clicked}>{this.props.name}</div>
        )
    }
}

export default Country;