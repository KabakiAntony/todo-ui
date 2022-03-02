<template>
    <div id="form-container">
        <h2 class="form-header">Forgot Password</h2>
        <form @submit.prevent="$emit('on-submit', form)">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
            <div>
                <button type="submit" class="submit">
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
            submit_text:"Send email"
        }
    }
}
</script>

<style scoped>
#form-container{
    margin-top:10%;
}
</style>