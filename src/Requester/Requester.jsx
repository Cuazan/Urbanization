import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://residencialapi-h3duawambwbshham.canadacentral-01.azurewebsites.net/',
    timeout: 5000
});

export async function GetProducts() {
    try {
        const response = await axiosInstance.get(
            '/api/urbanizations'
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function GetHouses() {
    try {
        const response = await axiosInstance.get(
            '/api/houses'
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function ToggleAvailability(houseId, currentStatus) {
    try {
        const response = await axiosInstance.patch(`/api/houses/${houseId}`, {
            available: !currentStatus
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
