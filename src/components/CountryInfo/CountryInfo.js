import React, {Component} from 'react';
import axios from 'axios';
import './CountryInfo.css';

class CountryInfo extends Component {

    state = {
        loadedCountry: null,
        borderCountries: [],
    };

    componentDidUpdate() {

        const loadedCountry = this.state.loadedCountry;
        const newCountryCode = this.props.code;

        if (newCountryCode) {
            if (!loadedCountry || (newCountryCode !== loadedCountry.alpha3Code)) {
                const baseURL = "https://restcountries.eu/rest/v2/alpha/";
                axios.get(baseURL + this.props.code)
                    .then(response => {
                        this.setState({loadedCountry: response.data});
                        const requests = this.state.loadedCountry.borders.map(borderCountry => axios.get(baseURL + borderCountry).then(response => {return response.data}
                        ))
                        Promise.all(requests).then(countries => {
                            this.setState({borderCountries: countries})
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

    render() {
        return (
            this.state.loadedCountry ?
                <div className="country-info-main-container">
                    <div><img alt="country flag" className="img" src={this.state.loadedCountry.flag}/></div>
                    <p>{this.state.loadedCountry.name}</p>
                    <p>Population: {this.state.loadedCountry.population}</p>
                    <p>Capital: {this.state.loadedCountry.capital}</p>
                    <p>Region: {this.state.loadedCountry.region}</p>
                    {!!this.state.borderCountries.length &&
                    <div> Borders with:
                        <ul>
                            {this.state.borderCountries.map(country => <li>{country.name}</li>)}
                        </ul>
                    </div>}
                </div> : null
        )
    }
}

export default CountryInfo;