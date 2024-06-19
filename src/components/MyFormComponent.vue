<template>
    <!-- S: My Created Form Section -->
    <section class="my-form-section mb-5">
        <div class="section-header mb-3">
            <h4 class="section-title text-muted">My Forms</h4>
        </div>
        <div class="row">

            <!-- S: Link to Create New Form -->
            <div class="col-md-4">
                <div class="card card-default">
                    <div class="card-header">
                        <h5 class="mb-0">Forms</h5>
                    </div>
                    <div class="card-body">
                        <router-link to="/form/create" class="btn btn-primary btn-block">+ Create New Form</router-link>
                    </div>
                </div>
            </div>
            <!-- E: Link to Create New Form -->

            <!-- S: My Form Preview -->
            <div class="col-md-4" v-for="form in forms">
                <div class="card card-default">
                    <div class="card-header border-0 d-flex justify-content-between">
                        <h5 class="mb-0">Form</h5>
                        <a href="#" class="btn btn-sm btn-primary">Detail</a>
                    </div>
                    <div class="card-body p-0">
                        <table class="table table-striped mb-0">
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <td>
                                        <span class="badge bg-success text-white"
                                            v-if="form.type == 'public'">Public</span>
                                        <span class="badge bg-info text-white" v-else>Private</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td class="text-muted">{{ form.name }}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td class="text-muted">{{ form.description }}</td>
                                </tr>
                                <tr>
                                    <th>Total Respondens</th>
                                    <td class="text-muted">{{ form.respondens_count }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- E: My Form Preview -->

        </div>
    </section>
    <!-- E: My Created Form Section -->
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            forms: []
        }
    },
    mounted() {
        this.getMyForm()
    },
    methods: {
        getToken() {
            const data = JSON.parse(localStorage.getItem('data_user'))
            return data.token
        },
        getMyForm() {
            axios.get(import.meta.env.VITE_BASE_API_URL + '/forms/mine?token=' + this.getToken()).then(response => {
                this.forms = response.data.MyForm
            })
                .catch(error => {
                    alert(error.response.data.message)
                })
        }
    }
}
</script>
