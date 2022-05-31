<template>
    <div class="container mt-5">
        <div class="card ms-auto me-auto p-3 shadow-lg custom-card">

            <font-awesome-icon icon="user-circle" class="ms-auto me-auto user-icon"/>

            <div v-if="errorMessage" class="alert alert-danger">
                {{errorMessage}}
            </div>

            <form @submit.prevent="handleLogin"
                  novalidate
                  :class="submitted ? 'was-validated' : ''">

                <div class="form-group">
                    <label for="username">Username</label>
                    <input
                            v-model="formData.username"
                            type="text"
                            id="username"
                            class="form-control"
                            name="username"
                            placeholder="Username" required/>
                    <div class="invalid-feedback">
                        Username is required.
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                            v-model="formData.password"
                            type="password"
                            id="password"
                            class="form-control"
                            name="password"
                            placeholder="Password" required/>
                    <div class="invalid-feedback">
                        Password is required.
                    </div>
                </div>

                <button class="btn btn-success mt-3 w-100"
                        @click="submitted=true"
                        :disabled="loading"
                >
                    Login
                </button>
            </form>


            <span class="mt-2"> Create an account</span>
            <router-link class="btn btn-link text-primary" to="/register">
                Register Now
            </router-link>
        </div>
    </div>
</template>

<script>
    import User from "@/models/user";
    import vuex from "vuex";
    import AuthenticationService from '../services/authentication.services';

    export default {
        name: "login",
        data() {
            return {
                formData: new User(),
                loading: false,
                submitted: false,
                errorMessage: '',
            };
        },
        computed: {
            ...vuex.mapGetters(['currentUser']),
        },
        mounted() {
            //this.currentUser?.username = this.currentUser != null && this.currentUser.username != null
            if (this.currentUser?.username) {
                this.$router.push('/profile');
            }
        },
        methods: {
            ...vuex.mapActions(['updateUser']),
            handleLogin() {
                if (!this.formData.username || !this.formData.password) {
                    return;
                }
                this.loading = true;
                AuthenticationService.login(this.formData).then((response) => {
                    this.updateUser(response.data);
                    this.$router.push('/profile');
                }).catch((err) => {
                    console.log(err);
                    this.errorMessage = 'Unexpected error occurred.';
                })
                    .then(() => this.loading = false);
            }
        },
    };
</script>

<style scoped>
</style>