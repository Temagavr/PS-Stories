export default class EventsListStore
{
    // _serverApi = null;

    constructor(serverApi)
    {
        this._serverApi = serverApi;
    }


    async getEventsList()
    {
        const response = await this._serverApi.getEvents();

        if(response)
            return response;
    }
}