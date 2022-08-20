/* CSS */
import "./Timeline.css";
import "react-vertical-timeline-component/style.min.css";
/* Dependencies */
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Rest from "../rest/Rest";
/* Components */
import GalleryPreview from "../gallery_preview/GalleryPreview.js";
import { Parallax, Background } from 'react-parallax';
import { CircularProgress } from "@material-ui/core";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
/* Resources */
import backgroundImage from "./Mittellandkanal-Background-1920x1500.jpg";
import { ReactComponent as Icon } from "./timeline-icon.svg";

class Timeline extends Component {

    state = {
        data: null,
        loading: true
    }

    componentDidMount = () => {
        this.loadData();
    }

    getNumberOfImagesPerYear = (years) => {
        const result = new Map();
        // Determine the number of images per year.
        years.forEach(({ laufzeit }) => {
            if (laufzeit) {
                let nElements = result.get(laufzeit);
                nElements
                    ? result.set(laufzeit, ++nElements)
                    : result.set(laufzeit, 1)
            }
        });
        // Convert the map to an array of objects.
        return Array.from(result)
            .map(([year, nImages]) => { return { year: year, nImages: nImages }})
            .sort((a, b) => a.year - b.year);
    }

    loadData = () => {
        let rest = new Rest("/api");
        rest.get()
            .then(response =>
                JSON.parse(Rest.b64DecodeUnicode(response.data)))
            .then(years =>
                this.setState({ data: this.getNumberOfImagesPerYear(years), loading: false }))
            .catch(err =>
                console.debug("An error occurred while loading the timeline :" + err));
    }

    render() {
        return this.state.loading ? (
        <CircularProgress style={{
            position: "absolute",
            top: "50vh",
            left: "50vw"
        }}/>
        ) : (
        <Parallax strength={5950}>
            <Background>
                <img
                    style={{
                        filter: "blur(1.25px) saturate(75%)"
                    }}
                    src={backgroundImage}
                    alt={""} />
            </Background>
            <VerticalTimeline>
                {
                    this.state.data.map(({ year, nImages }, i) => {
                        return <VerticalTimelineElement
                            key={i}
                            date={year}
                            icon={<Icon />}
                            contentStyle={{ cursor: "pointer" }}
                            onTimelineElementClick={() => { this.props.history.push("/Year/" + year) }} >
                            <GalleryPreview year={year} usage="timeline" />
                            <p className="vertical-timeline-element-title">
                                {`${ nImages } ${ nImages > 1 ? "Bilder" : "Bild" }`}
                            </p>
                        </VerticalTimelineElement>
                    })
                }
            </VerticalTimeline>
        </Parallax>
        );
    }
}

export default withRouter( Timeline );