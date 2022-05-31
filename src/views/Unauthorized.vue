<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center mt-4">
                <span class="display-1">
                    401 Error
                </span>
                <div class="mb-4 lead text-danger">
                    Sorry! You are not authorized access to this page.
                </div>
                <router-link class="btn btn-link" to="/home">
                    Back to Home page
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "unauthorized",
    }
</script>

<style scoped>

</style>