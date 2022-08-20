import React, {Component} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import {LocationOn} from "@material-ui/icons";

class MarkerTooltip extends Component {

    render() {
        let {titel, signatur, laufzeit} = this.props.data;
        let imgSrc = window.location.origin + "/api/images/" + signatur + "?size=small"
        return (
            <Card raised variant="outlined">
                <div style={{
                }}>
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
                        <Typography color="primary" component={"h3"} style={{fontWeight: 600, fontSize: "1.2em"}}>
                            {laufzeit}
                        </Typography>
                        {titel}
                    </CardContent>
                </div>

            </Card>
        )
    }
}

export default MarkerTooltip;