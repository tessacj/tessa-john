// const axios = require('axios').default;

const base_url = "https://tessa.budgetapi.speurholdings.com";

export const postLogin = async (usr, pwd) => {
    const endPoint = "/login";
    const url = base_url + endPoint;

    const data = { email: usr, password: pwd };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch((err) => {
        console.log("There was an error: ", err);
    });

    return response.json(response);
};

export const postUser = async (name, email, pwd) => {
    const endPoint = "/users";
    const url = base_url + endPoint;

    const data = { name: name, email: email, password: pwd };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch((err) => {
        console.log("There was an error: ", err);
    });

    return response.json(response);
};

