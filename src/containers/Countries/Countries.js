import React, {Component} from 'react';
import axios from 'axios';
import Country from '../../components/Country/Country'

class Countries extends Component {
    state = {
        countries: [],
        currentCountry: null,
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

    setCurrentCountry = (country) => {
        this.setState({
            ...this.state,
            currentCountry: country
        });
    };



    render() {
        let countries = this.state.countries;
        return (
            countries.map(country => (<Country name={country.name}
                                               clicked={()=>{this.setCurrentCountry(country.name)}}/>))
        );
    }
}

export default Countries;