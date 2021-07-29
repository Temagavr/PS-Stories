import GraduatesStore from "../Store/GraduatesStore";
import EventInfoStore from "../Store/EventInfoStore";
import EventsListStore from "../Store/EventsListStore";
import GradateYearsListStore from "../Store/GraduateYearsListStore"

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

    createGraduateYearsListStore()
    {
        return new GradateYearsListStore(this._serverApi);
    }
}