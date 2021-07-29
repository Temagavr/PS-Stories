import axios from 'axios'

export default class ServerApi
{

    async getGraduateYearsList()
    {
        let response = await fetch('http://localhost:3000/api/graduates', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

        return await response.json();        
    }

    async getGraduates(year)
    {
        let response = await fetch('http://localhost:3000/api/graduates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "year": year
            })
        })
        
        return await response.json();
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