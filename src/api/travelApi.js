import axios from "axios";

const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaceData = async (sw, ne) => {
    console.log("api ", sw, ne);
    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            method: "GET",
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                // restaurant_tagcategory_standalone: '10591',
                // restaurant_tagcategory: '10591',
                // limit: '30',
                // currency: 'USD',
                // open_now: 'false',
                // lunit: 'km',
                // lang: 'en_US'
            },
            headers: {
                "X-RapidAPI-Key":
                    "06b2266ae4msh604856cd60362fap1aa778jsne7a34d66f929",
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
