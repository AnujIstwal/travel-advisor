import React, { useState, useEffect, createRef } from "react";
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

import PlaceDetail from "../PlaceDetail/PlaceDetail";

import useStyles from "./style.js";
import noData from "../../images/nodata.svg";

const List = ({
    places,
    childClicked,
    isLoading,
    type,
    setType,
    rating,
    setRating,
}) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) =>
            Array(places?.length)
                .fill()
                .map((_, i) => refs[i] || createRef())
        );
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4" style={{ fontWeight: 500 }}>
                Food & Dining around you
            </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    {places && places.length ? (
                        <Grid container spacing={3} className={classes.list}>
                            {places?.map((place, i) => (
                                <Grid ref={elRefs[i]} key={i} item xs={12}>
                                    <PlaceDetail
                                        selected={Number(childClicked) === i}
                                        refProp={elRefs[i]}
                                        place={place}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <div className={classes.noData}>
                            <img src={noData} alt="no data loaded" />
                            <h3
                                style={{
                                    margin: 10,
                                    display: "inherit",
                                    justifyContent: "center",
                                    fontWeight: 400,
                                    color: "#404040",
                                }}
                            >
                                We couldn't fetch the data
                            </h3>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default List;
