import React, {Component} from "react";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {LocationOn} from "@material-ui/icons";

class GalleryCard extends Component {

    state = {
        image: null,
        loading: true
    }

    render() {

        let {titel, laufzeit, geoKoordinateX, geoKoordinateY, signatur} = this.props.data;
        let imgSrc = window.location.origin + "/api/images/" + signatur + "?size=medium"


        return (
            <Card raised variant="outlined">
                <CardActionArea onClick={() => this.props.clickCallback(this.props.data)}>
                    <div style={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",

                    }}>
                        <CardMedia
                            component="img"
                            alt="no img"
                            title={titel}
                            src={imgSrc}
                        />
                    </div>

                    <CardContent>
                        <Typography color="primary" component={"h3"} style={{fontWeight: 600, fontSize: "1.2em"}} noWrap
                                    gutterBottom>
                            {titel}
                        </Typography>
                        <Typography paragraph component="p">
                            {titel}
                        </Typography>
                        {geoKoordinateX !== 0 && geoKoordinateY !== 0 &&
                        <div style={{
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "baseline",

                        }}>
                            <LocationOn fontSize="small"/>
                            <Typography variant="caption" component="p">
                                {geoKoordinateX + ", " + geoKoordinateY}
                            </Typography>
                        </div>}
                    </CardContent>
                </CardActionArea>


            </Card>
        );

    }
}

export default GalleryCard;