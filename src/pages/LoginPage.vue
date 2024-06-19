<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form class="card card-default" @submit.prevent="handleLogin">
                    <div class="card-header">
                        <h4 class="mb-0">Login</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group row align-items-center mb-3">
                            <div class="col-4 text-right">Email</div>
                            <div class="col-8">
                                <input type="email" class="form-control" v-model="user.email" />
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <div class="col-4 text-right">Password</div>
                            <div class="col-8">
                                <input type="password" class="form-control" v-model="user.password" />
                            </div>
                        </div>
                        <div class="form-group row align-items-center mt-4">
                            <div class="col-4"></div>
                            <div class="col-8">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
            }
        }
    },  
    // mounted() {
    //     this.handleLogin()
    // },

    methods: {
        handleLogin() {
            console.log(import.meta.env.VITE_BASE_API_URL)
            axios.post(import.meta.env.VITE_BASE_API_URL + "/authentication/login", this.user).then(response => {
                localStorage.setItem('data_user', JSON.stringify(response.data))
                this.$emit (
                    'setUser'
                )
                this.$router.push('/')
            })
            .catch(error => {
                alert(error.response.data.message)
            })
        }
    }
}
</script>