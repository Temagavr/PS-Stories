import GraduatesStore from "../Store/GraduatesStore";
import EventInfoStore from "../Store/EventInfoStore";
import EventsListStore from "../Store/EventsListStore";

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

    createEventInfoStore()
    {
        return new EventInfoStore(this._serverApi);
    }

    createEventsListStore()
    {
        return new EventsListStore(this._serverApi);
    }
}