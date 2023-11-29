import axios from "axios";

export async function fetchRandomCatGif() {
    try {
        const response = await axios.get("https://cataas.com//cat/gif");

    if (response.status !== 200) {
        throw new Error("Network response was not ok");
    }

        const data = response.data;
        return data;
    } catch (error) {
        console.error("Axios error:", error);
        throw error;
    }
}