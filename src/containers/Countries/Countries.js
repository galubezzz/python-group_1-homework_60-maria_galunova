import React, {Component} from 'react';
import axios from 'axios';
import Country from '../../components/Country/Country'

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
            countries.map(country => (<Country name={country.name}/>))
        );
    }
}

export default Countries;