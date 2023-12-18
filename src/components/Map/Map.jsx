import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";

const Map = ({ setCoords, setBounds, coordinates }) => {
    const matches = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAYEpe2racOTGNGo138QubESAAY5tDC920",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
                }}
                onChildClick={""}
            >
                <div
                    className={classes.markerContainer}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                ></div>
            </GoogleMapReact>
        </div>
    );
};

export default Map;
