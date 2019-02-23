import React, {Component} from 'react';

class Country extends Component{
    render(){
        return(
            <div>{this.props.name}</div>
        )
    }
}

export default Country;