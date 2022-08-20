import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import Rest from "../../rest/Rest";
import {CircularProgress} from "@material-ui/core";
import GalleryCardAll from "./GalleryCard/GalleryCardAll";

class YearSingle extends Component {

    state = {
        data: null,
        loading: true
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {
        let rest = new Rest("/api/laufzeit/" + this.props.match.params.year);
        rest.get().then(data => {
            this.setState({data: JSON.parse(Rest.b64DecodeUnicode(data.data)), loading: false});
        });
    }

    render() {
        return (

            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "2em"
            }}>
                {this.state.loading ? (
                    <CircularProgress style={{
                        position: "absolute",
                        top: "50vh",
                        left: "50vw"
                    }}/>
                ) : (
                    <GalleryCardAll data={this.state.data}/>
                )
                }
            </div>
        );

    }
}

export default withRouter(YearSingle);