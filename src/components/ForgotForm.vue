<template>
    <div id="form-container">
        <h2 class="form-header">Forgot Password</h2>
        <form @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
            <div>
                <button type="submit" class="submit" :class="action">
                {{ submit_text }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'ForgotForm',
    data(){
        return{
            form:{
                email:'',
            },
            action:'',
            submit_text:"Send email"
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
#form-container{
    margin-top:10%;
}
</style>