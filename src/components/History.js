
import React, { Component } from 'react';

export default class History extends Component {
    render(){
        const glidare = [...this.props.productState.history, ...this.props.historyState.history];
        const newGlidare = glidare.sort((currentGlidare, nextGlidare) => currentGlidare.time.getTime() - nextGlidare.time.getTime()).reverse();
        console.log(newGlidare);
        return(
            <div className="container">

                <h1>History</h1>
                <ul className="history-ul">
                    <div className="col-xs-12 his-ul"><h6>Hej Hej</h6></div>
                    {newGlidare.map((item, index) => {
                        return(
                            <li key={index}>{item.type}, {item.time.toString()}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}