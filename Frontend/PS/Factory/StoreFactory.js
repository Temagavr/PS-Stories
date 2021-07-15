import GraduatesStore from "../Store/GraduatesStore";

export default class StoreFactory
{
    // _serverApi = null;

    constructor(serverApi)
    {
        this._serverApi = serverApi;
    }

    createGraduatesStore()
    {
        return new GraduatesStore(this._serverApi);
    }
}