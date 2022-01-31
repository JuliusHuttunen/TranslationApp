import { url } from './'
const APIKEY = "2621021822583701864026758372887704504265983508394583234625985500"

export async function getUserFromAPI(userName) {
    try {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
        }
        const response = await fetch(`${url}`, config)
        const data = await response.json()
        console.log(userName)
        for (let user of data) {
            if (user.username.toLowerCase() === userName.toLowerCase()) {
                return [null, user]
            }
        }
        return registerUserAPI(userName)

    }
    catch (error) {
        return [error.message, null]
    }
}

export async function registerUserAPI(userName) {
    try {
        const translations = []
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
            body: JSON.stringify(
                {
                    username: userName,
                    translations
                }
            )
        }
        const response = await fetch(`${url}`, config)
        const data = await response.json()
        console.log([null, data])
        return [null, data]
    }
    catch (error) {
        return [error.message, null]
    }
}

export async function updateTranslationsApi(userId, translations) {
    try {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": APIKEY
            },
            body: JSON.stringify(
                {
                    translations: translations, 
                }
            )
        };
        const response = await fetch(`${url}/${userId}`, config);
        const data = await response.json();
        console.log("Translation update: ",[null, data])
        return [null, data];
    }
    catch (error) {
        return [error.message, null];
    }
}