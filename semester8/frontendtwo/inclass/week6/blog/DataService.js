const baseUrl = "http://localhost:3000/";
async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
        return data
    } else { 
        throw {name: "servicesError", message: data};
    }
}

export default class DataService {
    constructor(endPoint) {
        this.endPoint = endPoint;
    }

    async getData() {
        return await fetch(baseUrl+this.endPoint).then(convertToJson);
    }
    async postData(data) {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }  
        };
        return await fetch(baseUrl+this.endPoint, options).then(convertToJson);
    }
}