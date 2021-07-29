export default class getGraduateYearsListStore
{
    constructor(serverApi)
    {
        this._serverApi = serverApi
    }

    async getGraduateYears()
    {
        const response = await this._serverApi.getGraduateYearsList();

        if(response)
            return response;
    }
}