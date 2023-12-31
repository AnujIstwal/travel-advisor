import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";
import mapStyles from "../../mapStyles.js";

const Map = ({
    setCoords,
    setBounds,
    coordinates,
    places,
    setChildClicked,
    weatherData,
}) => {
    const isDesktop = useMediaQuery("(min-width:600px)");
    const classes = useStyles();
    if (typeof places === "undefined") places = [];
    console.log("weather - ", weatherData);

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: mapStyles,
                }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
                }}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={(child) => {
                    setChildClicked(child);
                }}
            >
                {places?.length &&
                    places?.map((place, i) => (
                        <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            {!isDesktop ? (
                                <LocationOnOutlinedIcon
                                    color="primary"
                                    fontSize="large"
                                />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography
                                        className={classes.typography}
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={
                                            place.photo
                                                ? place.photo.images.large.url
                                                : "https://source.unsplash.com/1600x900/?restaurant,food"
                                        }
                                        alt={place.name}
                                    />
                                    <Rating
                                        name="read-only"
                                        size="small"
                                        value={Number(place.rating)}
                                        readOnly
                                    />
                                </Paper>
                            )}
                        </div>
                    ))}

                {/* {weatherData?.list?.length &&
                    weatherData.list.map((data, i) => (
                        <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                            <img
                                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                height="70px"
                                alt="weather"
                            />
                        </div>
                    ))} */}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
