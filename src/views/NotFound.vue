<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center mt-4">
                <span class="display-1">
                    404 Error
                </span>
                <div class="mb-4 lead text-danger">
                    Sorry! The page looking for doesn't exists.
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
        name: "not-found"
    }
</script>

<style scoped>

</style>