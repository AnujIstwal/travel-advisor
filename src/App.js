import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlaceData } from "./api/travelApi";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoords({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    useEffect(() => {
        console.log("Bound - ", bounds);
        getPlaceData(bounds.sw, bounds.ne).then((data) => {
            console.log(data);
            setPlaces(data);
        });
    }, [bounds, coords]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coordinates={coords}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
