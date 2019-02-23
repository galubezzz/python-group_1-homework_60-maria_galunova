import React, {Component} from 'react';
import axios from 'axios';
import Country from '../../components/Country/Country'
import CountryInfo from '../../components/CountryInfo/CountryInfo'

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
            <div>
                {countries.map(country => (<Country name={country.name}
                                               clicked={()=>{this.setCurrentCountry(country.name)}}/>))}
                <CountryInfo />
            </div>
        );
    }
}

export default Countries;