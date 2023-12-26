import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import LocationIcon from "../../images/Location.svg";
import useStyles from "./style.js";

const Header = ({ setCoords }) => {
    const classes = useStyles();
    const [actocomplete, setAutocomlete] = useState(null);

    const onLoad = (autoC) => setAutocomlete(autoC);
    const onPlaceChanged = () => {
        const lat = actocomplete.getPlace().geometry.location.lat();
        const lng = actocomplete.getPlace().geometry.location.lng();
        setCoords({ lat, lng });
    };

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <img src={LocationIcon} alt="Location" width={40} />
                    <Typography
                        variant="h5"
                        className={classes.title}
                        style={{ fontWeight: "bolder" }}
                    >
                        Travel Advisor
                    </Typography>
                </div>

                <Box display="flex">
                    <Typography
                        variant="h6"
                        className={classes.title}
                        style={{ fontWeight: 200 }}
                    >
                        Explore new places
                    </Typography>
                    <Autocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                    >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
