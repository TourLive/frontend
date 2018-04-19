import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class GlobalHeader extends Component {
    render() {
        return(
            <header className="App-header">
                <table>
                    <td><img src="logo.png" alt="TourLive Logo" className="App-logo"/></td>
                    <td><div className="App-title">TourLive</div></td>
                    <td>
                        <div className="App-title Div-right">Etappe 3</div>
                    </td>
                </table>
            </header>


        );
    }
}

export default GlobalHeader;