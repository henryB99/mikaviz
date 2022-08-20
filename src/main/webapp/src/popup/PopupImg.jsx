import React, {Component} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Dialog, DialogContent, Typography} from "@material-ui/core";
import {LocationOn} from "@material-ui/icons";


class PopupImg extends Component {

    render() {
        let {open, closeCallback, data} = this.props;
        let imgSrc = data ? window.location.origin + "/api/images/" + data.signatur + "?size=large" : "";
        return (
            open &&
            <Dialog maxWidth={"lg"} open={open} onClose={closeCallback}>
                <DialogContent>
                    <Card>
                        <div style={{
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "center",

                        }}>
                            <CardMedia
                                component="img"
                                alt="no img"
                                title={data.titel}
                                src={imgSrc}
                            />
                        </div>

                        <CardContent>
                            <Typography color="primary" component={"h3"} style={{fontWeight: 600, fontSize: "1.2em"}} noWrap gutterBottom>
                                {data.titel + ", " + data.laufzeit}
                            </Typography>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        );

    }
}

export default PopupImg;