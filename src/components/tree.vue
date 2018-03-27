<template>
    <li>
        <div @click="toggle" @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder">[ {{open ? '-' : '+'}} ]</span>
        </div>
        <ul v-show="open">
            <tree :model="model" v-for="model in model.children" :key="model.$index">
            </tree>
            <li @click="addChild">+</li>
        </ul>
    </li>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'tree',
        data() {
            return {
                open: false
            }
        },
        props: {
            model: Object
        },
        computed: {
            isFolder() {
                console.log(this.model);
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle() {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType() {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild() {
                this.model.children.push({name: 'new staff'})
            }
        }
    }
</script>

<style scoped>

</style>