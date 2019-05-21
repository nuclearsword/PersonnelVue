<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12">
                <div class="text-left">
                    <input v-on:click="createPersonnelRecord(model)" type="button" class="btn btn-success" value="Add Person">
                    <input v-bind="model.firstName" type="text" placeholder="First Name">
                    <input v-bind="model.lastName" type="text" placeholder="Last Name">
                    <input v-bind="model.age" type="text" placeholder="Age">
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
                        <tr v-for="person in personnel">
                            <td>{{ person.firstName }}</td>
                            <td>{{ person.lastName }}</td>
                            <td>{{ person.age }}</td>
                            <td>
                                <input type="button" class="btn btn-primary" value="e">
                                <input type="button" class="btn btn-primary" value="x">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/PersonnelApiService';
export default {
    data(){
        return {
            loading: false,
            personnel: [],
            model: {}
        };
    },
    async created(){
        this.getAll()
    },
    methods: {
        async getAll(){
            this.loading = true
            try{
                this.personnel = await api.getAll()
            }finally{
                this.loading = false;
            }
        },
        async updatePersonnelRecord(person){
            this.model = Object.assign({},person)
        },
        async createPersonnelRecord(person){
            const isUpdate = !!this.model.id;
            if(isUpdate){
                await api.update(this.model.id, this.model)
            }else{
                await api.create(this.model)
            }

            this.model = {}

            await this.getAll()
        },
        async deletePersonnelRecord(id){
            if(confirm('Are you sure?')){
                if(this.model.PersonID === id){
                    this.model = {}
                }
                await api.delete(id)
                await this.getAll()
            }
        }
    }
}
</script>



