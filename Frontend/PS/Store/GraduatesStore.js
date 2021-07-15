export default class GraduatesStore
{
    // _serverApi = null;

    constructor(serverApi)
    {
        this._serverApi = serverApi;
    }


    getGraduatesList(year)
    {
        const response = this._serverApi.getGraduates(year);

        if(response)
            return response;
    }
}