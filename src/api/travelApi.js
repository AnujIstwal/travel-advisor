import axios from "axios";

export const getPlaceData = async (type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                method: "GET",
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const getWeatherData = async (lat, lng) => {
//     try {
//         const { data } = await axios.request(
//             `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,
//             {
//                 method: "GET",
//                 headers: {
//                     "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
//                     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//                 },
//             }
//         );

//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };
