
// https://www.swapi.tech/api/planets
// https://www.swapi.tech/api/people
// https://www.swapi.tech/api/vehicles

export class Api {
    static async getPeople() {
        const response = await fetch('https://www.swapi.tech/api/people');
        const data = await response.json();
        return data;
    }
    static async getPlanets() {
        const response = await fetch('https://www.swapi.tech/api/planets');
        const data = await response.json();
        return data;
    }
    static async getVehicles() {
        const response = await fetch('https://www.swapi.tech/api/vehicles');
        const data = await response.json();
        return data;
    }
}

