import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlaceData } from "./api/travelApi";

const App = () => {
    const [places, setPlaces] = useState([]);
    // const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    console.log({ rating });

    useEffect(() => {
        const filteredPlaces = places?.filter(
            (place) => place.rating >= rating
        );
        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoords({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);
            // getWeatherData(coords.lat, coords.lng).then((data) => {
            //     console.log(data);
            //     setWeatherData(data);
            // });

            getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
                console.log(data);
                setPlaces(
                    data?.filter((place) => place.name && place.num_reviews > 0)
                );
                setFilteredPlaces([]);
                setIsLoading(false);
            });
        }
    }, [bounds, type]);

    return (
        <>
            <CssBaseline />
            <Header setCoords={setCoords} />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List
                        places={
                            filteredPlaces?.length ? filteredPlaces : places
                        }
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coordinates={coords}
                        places={
                            filteredPlaces?.length ? filteredPlaces : places
                        }
                        setChildClicked={setChildClicked}
                        // weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
// {
//     name: "Rudy's Pizza Napoletana",
//     num_reviews: "122",
//     price_level: "$",
//     rating: "5.0",
//     address: "53-54 Tottenham Court Road",
//     phone: "01618208292",
//     web_url: "",
//     website: "",
//     latitude: "30.377532000000002",
//     longitude: "76.83579500000002",
// },
// {
//     name: "Abc restarant",
//     num_reviews: "12",
//     price_level: "$$$",
//     rating: "4.0",
//     address: "Ambala Cantt",
//     phone: "91618208292",
//     web_url: "",
//     website: "",
//     latitude: "30.377532000000001",
//     longitude: "76.83579500000001",
// },
