export default class FetchData {
    ramUrl = 'https://rickandmortyapi.com/api/';

    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    };

    getCharacter = async () => await this.getResource(this.ramUrl + 'character')
    getLocation = async () => await this.getResource(this.ramUrl + 'location')
    getEpisode = async () => await this.getResource(this.ramUrl + 'episode')
}