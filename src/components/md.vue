<template>
    <div id="marked">
        <div class="row">
            <div class="col-sm-6">
                <textarea class="edit" v-model="input" debounce=500></textarea>
            </div>
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
                input: '# Hello World!\n' +
                '###### ddd\n' +
                '``` javascript\n' +
                'function(){\n' +
                '    alert(1);\n' +
                '}\n' +
                '```'
            }
        },
        computed: {
            markedContent() {
                return marked(this.input)
            }
        }
        // filters: {
        //     marked: marked
        // }
    }
</script>

<style scoped>
    .edit {
        border: 1px #ddd solid;
        resize: none;
        width: 500px;
        height: 200px;

    }
</style>