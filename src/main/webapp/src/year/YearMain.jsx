import React, {Component} from "react";
import { withRouter, Route } from 'react-router-dom';
import YearSingle from "./components/YearSingle";
import YearAll from "./components/YearAll";
import backgroundImage from "../timeline/Mittellandkanal-Background-1920x1500.jpg";

class YearMain extends Component {

    render() {
        return (
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100%",
                width: "100%",
                flexGrow: 1,
            }}>
                <React.Fragment>
                    <Route exact path="/year" component={YearAll}/>
                    <Route exact path="/year/:year" component={YearSingle}/>
                </React.Fragment>
            </div>

        );

    }
}

export default YearMain;