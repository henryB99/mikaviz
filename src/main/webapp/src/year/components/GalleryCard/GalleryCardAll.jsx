import React, {Component} from "react";
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Grid, IconButton,
    Paper,
    Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import GalleryCard from "./GalleryCard";
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import PopupImg from "../../../popup/PopupImg";

class GalleryCardAll extends Component {

    state = {
        page: 0,
        openedEntity: null
    }

    maxPage = 0;

    constructor(props) {
        super(props);
        this.maxPage = Math.ceil(props.data.length / 6);
    }

    handleChange = (event) => {
        this.setState({page: parseInt(event.target.value)})
    }

    changePageBy = (num) => {
        let newPageNum = (this.state.page + num + this.maxPage) % this.maxPage;
        this.setState({page: newPageNum})
    }

    handlePopupClose = () => {
        this.setState({openedEntity: null});
    }

    handlePopupOpen = (entity => {
        this.setState({openedEntity: entity});
    })

    render() {

        let data = this.props.data;

        let radioButtons = [];
        let page = this.state.page;
        for (let i = 0; i < this.maxPage; i++) {
            radioButtons.push(
                <Grid item key={i}>
                    <Radio
                        size="small"
                        color="primary"
                        checked={page === i}
                        onChange={this.handleChange}
                        value={i}
                    />
                </Grid>
            );
        }

        return (
            <div>
                <Paper style={{
                    padding: 32
                }}>
                    <Grid
                        spacing={2}
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center">
                        <Grid
                            item
                            spacing={4}
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid key={0} xs={1} item>
                                <IconButton onClick={event => this.changePageBy(-1)}>
                                    <ArrowBack color="primary" fontSize="large"/>
                                </IconButton>

                            </Grid>
                            <Grid key={1} xs={10} item>
                                <Grid
                                    style={{
                                        minHeight: "45em",
                                        width: "60em"
                                    }}
                                    spacing={4}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start"
                                >
                                    {
                                        data.filter((element, i) => i >= this.state.page * 6 && i < this.state.page * 6 + 6).map((element, i) => {
                                            return (
                                                <Grid key={i} item xs={4}>
                                                    <GalleryCard
                                                        clickCallback={(entity) => this.handlePopupOpen(entity)}
                                                        data={element}/>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Grid>
                            <Grid key={2} xs={1} item>
                                <IconButton onClick={event => this.changePageBy(1)}>
                                    <ArrowForward color="primary" fontSize="large"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            justify="center"
                            alignItems="center"
                        >
                            {
                                radioButtons
                            }
                        </Grid>

                    </Grid>

                </Paper>
                <PopupImg open={this.state.openedEntity !== null} closeCallback={this.handlePopupClose}
                          data={this.state.openedEntity}/>
            </div>

        );

    }

}

export default GalleryCardAll;