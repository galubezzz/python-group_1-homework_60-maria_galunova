import React, {Component} from 'react';
import axios from 'axios';

class CountryInfo extends Component {

    state = {
        loadedCountry: null
    };

    componentDidUpdate() {

        const baseURL = "https://restcountries.eu/rest/v2/alpha/";
        axios.get(baseURL + this.props.code).then(response => {
            return response;
        }).then(response => {
            this.setState({loadedCountry: response.data});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            this.state.loadedCountry ?
                <div>!! {this.state.loadedCountry.name} {this.state.loadedCountry.population} !!</div> : null
        )
    }
}

export default CountryInfo;