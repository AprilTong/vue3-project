<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Parent></Parent>
    <!-- <CountDemo></CountDemo> -->
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import CountDemo from './components/count.vue'
import Parent from './pages/parent.vue'

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
        CountDemo,
        Parent,
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
