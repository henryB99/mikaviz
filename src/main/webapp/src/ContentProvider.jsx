import React, {Component} from "react";
import Timeline from "./timeline/Timeline";
import Map from "./map/Map";
import YearMain from "./year/YearMain";
import Imprint from "./imprint/Imprint";
import { withRouter ,Switch, Route } from 'react-router-dom';

class ContentProvider extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/Karte" component={Map}/>
                    <Route path="/Impressum" component={Imprint}/>
                    <Route path="/Year" component={YearMain}/>
                    <Route path="/" component={Timeline}/>
                </Switch>
            </React.Fragment>
        );

    }
}

export default withRouter(ContentProvider);