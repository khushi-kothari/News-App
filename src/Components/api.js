import React, { Component } from 'react'

export class Api extends Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        //add api url here..
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-06-10&sortBy=publishedAt&apiKey=API_KEY";
        const response =  await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>Loading...</div> : <div>Headlines...</div>}
            </div>
        )
    }
}

export default Api;
