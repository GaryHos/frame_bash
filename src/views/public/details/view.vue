<style lang="stylus" src="./view.styl"></style>
<template lang="html" src="./view.html"></template>

<script>
    export default {
        name: 'pDetials',
        data() {
            return {
            }
        },
        methods: {
            init() {
                console.log('this is details')
            },

            goPage() {
                this.$router.push('/public/axios_page');
            }
        },

        mounted() {
            this.init();
        }
    }
</script>