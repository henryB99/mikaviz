import React, {Component} from 'react';
import {MapContainer, TileLayer, Marker, Tooltip, Popup, Polyline} from 'react-leaflet';
import "./Map.css";
import positionsMittellandkanal from "./mittellandkanal.json";
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster";
import Rest from "../rest/Rest";
import MarkerTooltip from "./MarkerTooltip";
import PopupImg from "../popup/PopupImg";

const center = [52.4199989, 9.7035509];

class Map extends Component {


    state = {
        points: [],
        openedEntity: null
    }

    handlePopupClose = () => {
        this.setState({
            openedEntity: null
        })
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {

        new Rest("/api").get().then(data => {
            let decoded = JSON.parse(Rest.b64DecodeUnicode(data.data));
            let resultArray = [];
            decoded.forEach(entity => {
                // if(entity.geoKoordinateX !== 0 && entity.geoKoordinateY !== 0){
                if(entity.geoKoordinateX && entity.geoKoordinateY){
                    resultArray.push({
                        signatur: entity.signatur,
                        point: [entity.geoKoordinateX, entity.geoKoordinateY],
                        titel: entity.titel,
                        laufzeit: entity.laufzeit
                    });
                }
            })
            this.setState({points: resultArray});
        });
    }


    render() {
        return (
            <div>
                <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup showCoverageOnHover={false}>
                        {this.state.points.map((point, i) => {
                            return (
                                <Marker
                                    eventHandlers={{
                                        click: (e) => {
                                            this.setState({openedEntity: point})
                                        }
                                    }}
                                    position={point.point} key={i}>
                                    <Tooltip>
                                        <div>
                                            <MarkerTooltip
                                                style={{
                                                    width: 200,
                                                    height: 200
                                                }}
                                                data={{
                                                    signatur: point.signatur,
                                                    titel: point.titel,
                                                    laufzeit: point.laufzeit,
                                                }}
                                            />
                                        </div>
                                    </Tooltip>
                                </Marker>
                            )
                        })}
                    </MarkerClusterGroup>
                    <Polyline color={'red'} positions={positionsMittellandkanal.points}/>

                </MapContainer>
                <PopupImg open={this.state.openedEntity !== null} closeCallback={this.handlePopupClose} data={this.state.openedEntity} />
            </div>
        )
    }
}

export default Map;