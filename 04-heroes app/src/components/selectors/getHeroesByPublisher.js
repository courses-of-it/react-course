import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    const validPublishcers = ['DC Comics', 'Marvel Comics']

    if (!validPublishcers.includes( publisher )) {
        throw new Error(`Publisher ${publisher} no es valido`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}