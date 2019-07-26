import Http from '@common/app.http.js';

export default {
    getData: data => Http({
        url: '/5b9b127b61b19178b821ec8d/app/inventory/material/list',
        method: 'post',
        data
    }),

    getDetails: data => Http({
        url: '/5b9b127b61b19178b821ec8d/app/inventory/details',
        data
    })
}