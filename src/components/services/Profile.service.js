const BEER_API = `https://api.sampleapis.com/beers/ale`;
const COCKTAIL_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
const drinks_api = `https://api.sampleapis.com/beers/ale`;
const userApi = `https://my-json-server.typicode.com/Jeck99/fake-users-api/users`
export async function getUsersApi() {
    try {
        return await fetch(userApi)
            .then(res => res.json());
    }
    catch (error) {
        throw Error;
    }
}