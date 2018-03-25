<template>
    <div id="marked">
        <div class="row">
            <div class="col-sm-6">
                <textarea class="" v-model="input" debounce=500></textarea>
            </div>
            <b-alert show> Hello {{ input }}! </b-alert>
            <div class="col-sm-6">
                <div v-html="markedContent"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'

    export default {
        data() {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                input: '# Helzzz World!'
            }
        },
        computed: {
            markedContent () {
                return marked(this.input)
            }
        }
        // filters: {
        //     marked: marked
        // }
    }
</script>

<style scoped>

</style>