import axios from 'axios'

export default class ServerApi
{
    async getGraduates(year)
    {
        // let response = await fetch('', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })

        // return await response;

        console.log(year);
    }

    async getEvents()
    {
        // let response = await fetch('', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })

        // return await response;

        console.log('Receiving events list...');
    }

    async getEventInfo(id)
    {
        // let response = await fetch('', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })

        // return await response;

        console.log('Receiving event info... id = ' + id);
    }
}