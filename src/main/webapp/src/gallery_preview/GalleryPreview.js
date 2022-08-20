import React, { Component } from 'react';
import "./GalleryPreview.css";
import test_picture from "./11410.jpg";
import Rest from "../rest/Rest";
import {CircularProgress, Grid} from "@material-ui/core";
import GalleryCard from "../year/components/GalleryCard/GalleryCard";

class GalleryPreview extends Component {

    state = {
        data : [],
        loading : true
    }

    //HINT: Usage: <GalleryPreview year="1915/... position=""/>

    componentDidMount = () => {
        this.getSignaturesForTimelineFromDB(this.props.year);
    }

    // max 5 zufällige Signaturen aus der DB zur gegebenen Jahreszahl abrufen
    getSignaturesForTimelineFromDB = (year) => {
        //5 zufällige Signaturen aus Backend erhalten (GET max 5 signatures from backend for given year) -> JSON Rückgabe
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