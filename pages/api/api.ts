export class API {
    protected base_url: string = '';

    constructor(base_url: string) {
        this.base_url = base_url;
    }

    protected get(path: string, query = {}): Promise<any> {
        const completeUrl = this.base_url + path + (query ? `?${new URLSearchParams(query).toString()}` : '')
        return fetch(completeUrl)
            .then(response => response.json())
            .catch(error => console.error(error))
    }
}