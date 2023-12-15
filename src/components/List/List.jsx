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

import useStyles from "./style.js";

const List = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select id="type" onChange={(e) => e.target.value}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="rating">Rating</InputLabel>
                    <Select id="rating" onChange={(e) => e.target.value}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            </>
        </div>
    );
};

export default List;
