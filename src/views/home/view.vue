<style lang="stylus" src="./view.styl"></style>
<template lang="html" src="./view.html"></template>

<script>
    export default {
        name: 'pHome',
        data() {
            return {
                msg: 'hello! webpack4+vue2'
            }
        },
        methods: {
            goPage() {
                this.$router.push('/public/details');
            }
        }
    }
</script>