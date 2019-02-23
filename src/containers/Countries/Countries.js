import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Countries extends Component {
    state = {
        countries: [],
    };

    componentDidMount() {
        axios.get().then(response => {
            return response;
        }).then(response => {
            this.setState({countries: response.data});
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
        let countries = this.state.countries;
        return (
            countries.map(country => (<div>{country.name}</div>))
        );
    }
}

export default Countries;