<style lang="stylus" src="./view.styl"></style>
<template lang="html" src="./view.html"></template>

<script>
    import Model from '@models/model.public.js';
    export default {
        name: 'pAxiosPage',
        data() {
            return {

            }
        },
        methods: {
            init() {
                this.getData();
                this.getDetails();
            },

            async getData() {
                let result = await Model.getData({
                    pageSize: 1
                });
                if (result) {
                    console.log(result);
                }
            },

            async getDetails() {
                let result = await Model.getDetails({
                    pageSize: 1
                });
                if (result) {
                    console.log(result);
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>