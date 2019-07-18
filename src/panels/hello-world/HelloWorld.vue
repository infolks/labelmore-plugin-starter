<template>
    <div class="uk-padding">
        <button class="uk-button uk-button-default" @click="sayHello">
            Say Hello!
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            sayHello() {
                this.$ui.notify('Hello World!')
            }
        }
    }
</script>
