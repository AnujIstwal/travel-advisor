import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";

const Map = () => {
    const matches = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAYEpe2racOTGNGo138QubESAAY5tDC920",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >
                <div
                    className={classes.markerContainer}
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                >
                    map
                </div>
            </GoogleMapReact>
        </div>
    );
};

export default Map;
