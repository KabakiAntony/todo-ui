<template>
    <div id="form-container">
        <h2 class="form-header">{{ header }}</h2>
        <form @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
            <label>Password</label>
            <input type="password" v-model="form.password" required>
            <div>
                <button type="submit" class="submit" :class="action">
                {{ submit_text }}
                </button>
            </div>
            <div class="text-center">
                {{ bottom_text }}
                <router-link id="form-bottom" :to="{ name:route_name }" >{{ bottom_link_text }}</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'CommonForm',
    props:{
        header: String,
        submit_text: String,
        bottom_text: String,
        bottom_link_text: String,
        route_name: String,
    },
    data(){
        return{
            form:{
                email:'',
                password:''
            },
            action:''
        }
    },
    methods:{
        async handleSubmit(){
            this.$emit('submit', this.form)
        }

    }
}
</script>

<style scoped>
</style>