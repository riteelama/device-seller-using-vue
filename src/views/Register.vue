<template>
    <div class="container mt-5">
        <div class="card ms-auto me-auto p-3 shadow-lg custom-card">

            <font-awesome-icon icon="user-circle" class="ms-auto me-auto user-icon"/>

            <div v-if="errorMessage" class="alert alert-danger">
                {{errorMessage}}
            </div>

            <form @submit.prevent="handleRegister"
                  novalidate
                  :class="submitted ? 'was-validated' : ''">

                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input
                            v-model="formData.name"
                            type="text"
                            id="name"
                            class="form-control"
                            name="name"
                            placeholder="Full Name" required/>
                    <div class="invalid-feedback">
                        Full Name is required.
                    </div>
                </div>

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
                    <label for="name">Password</label>
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
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import User from '../models/user';
    import vuex from 'vuex';
    import AuthenticationService from '../services/authentication.services';

    export default {
        name: "register",
        data() {
            return {
                formData: new User(),
                loading: false,
                submitted: false,
                errorMessage: '',
            };
        },
        computed: {
            ...vuex.mapGetters(['currentuser']),
        },
        mounted() {
            //this.currentUser?.username = this.currentUser != null && this.currentUser.username != null
            if (this.currentUser?.username) {
                this.$router.push('/profile');
            }
        },

        methods: {
            handleRegister() {
                if (!this.formData.username || !this.formData.password || !this.formData.name) {
                    return;
                }

                this.loading = true;

                AuthenticationService.register(this.formData).then(() => {
                    this.$router.push('/login');
                }).catch((err) => {
                    console.log(err);
                    if (err?.response?.status === 409) {
                        this.errorMessage = 'Username is not valid.';
                    } else {
                        this.errorMessage = 'Unexpected error occured';
                    }
                }).then(() => this.loading = false);
            },
        },
    };
</script>

<style scoped>
    .custom-card {
        width: 300px;
        max-width: 100%;
        background: #8db2f6;
    }

    .user-icon {
        font-size: 100px;
        color: #4f355e;
    }
</style>