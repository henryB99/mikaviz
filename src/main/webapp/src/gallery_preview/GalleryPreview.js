import React, { Component } from 'react';
import "./GalleryPreview.css";
import Rest from "../rest/Rest";
import {CircularProgress} from "@material-ui/core";

class GalleryPreview extends Component {

    state = {
        data : [],
        loading : true
    }

    componentDidMount = () => {
        this.getSignaturesForTimelineFromDB(this.props.year);
    }

    getSignaturesForTimelineFromDB = (year) => {
        let rest = new Rest("/api/laufzeit/" + year + "/"+ 5 + "/");
        rest.get().then(data => {
            this.setState({data: JSON.parse(Rest.b64DecodeUnicode(data.data)), loading: false})
        }, this.setState({loading:false}));
    }

    render() {
        let firstPartURL = window.location.origin + "/api/images/";
        let lastPartURL = "?size=small";

        let data = this.state.data;

        //Bilder in Komponente einsetzen
        return this.state.loading ? (
            <CircularProgress />
        ) : (<div id="galleryPreview" style={{
            width: "10em",
            height:"12em",
            textAlign:"center"
        }}>
            {
                data.map((element, i) => {
                    let imgUrl = window.location.origin + "/api/images/" + element.signatur + "?size=small"
                    return (
                        <img key={i} id={"gallery_preview_picture_" + i} src={imgUrl} />
                    )
                })
            }

        </div>)
    }
}

export default GalleryPreview;