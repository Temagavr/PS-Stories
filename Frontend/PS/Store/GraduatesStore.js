export default class GraduatesStore
{
    // _serverApi = null;

    constructor(serverApi)
    {
        this._serverApi = serverApi;
    }


    async getGraduatesList(year)
    {
        const response = await this._serverApi.getGraduates(year);

        if(response)
            return response;
    }
}