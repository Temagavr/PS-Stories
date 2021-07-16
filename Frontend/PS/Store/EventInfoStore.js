export default class EventInfoStore
{
    // _serverApi = null;

    constructor(serverApi)
    {
        this._serverApi = serverApi;
    }


    async getEventInfo(id)
    {
        const response = await this._serverApi.getEventInfo(id);

        if(response)
            return response;
    }
}