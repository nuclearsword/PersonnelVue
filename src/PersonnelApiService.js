import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
    baseURL: 'https://localhost:5001/api/personnel/',
    json: true
});

export default{
    async execute(method, resource, data){
        return client(
            method,
            resource,
            data,

        ).then(req => {
            return req.data
        })
    },
    getAll() {
        return this.execute('', '/')
        //return client.get('/')
        //return axios.get('/')
    },
    create(data) {
        //return this.execute('POST', '/', data)
        client.post('/',data)
    },
    update(id, data) {
        return this.execute('put', `/${id}`, data)
    },
    delete(id) {
        return this.execute('delete', `/${id}`)
    }
}