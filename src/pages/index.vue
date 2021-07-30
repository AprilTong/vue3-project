<template>
    父组件
    <h3>{{ test }}</h3>
    <el-button size="mini" @click="test = 'april'">更新</el-button>
    <Child :msg="msg" @show="show"></Child>
    <h3>name: {{ name }}</h3>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import Child from '@/components/child.vue'
const test = ref('haha')
const msg = ref('hello, vue3')
const show = (name: string) => {
    console.log(`name is ${name}`)
}
const state = reactive({
    name: 'hzw',
})
const state2 = toRefs(state)
// export default defineComponent({
//     name: 'Parent',
//     components: {
//         Child,
//     },
//     setup() {
//         onBeforeMount(() => {
//             console.log('onBeforeMount')
//         })
//         onMounted(() => {
//             console.log('onMounted')
//         })
//         onBeforeUpdate(() => {
//             console.log('onBeforeUpdate')
//         })
//         onUpdated(() => {
//             console.log('onUpdated')
//         })
//         onBeforeUnmount(() => {
//             console.log('onBeforeUnmount')
//         })
//         onUnmounted(() => {
//             console.log('onUnmounted')
//         })
//         const test = ref('haha')
//         const msg = ref('hello, vue3')
//         const show = (name: string) => {
//             console.log(`name is ${name}`)
//         }
//         const state = reactive({
//             name: 'hzw',
//         })
//         const state2 = toRefs(state)
//         setInterval(() => {
//             state.name += '==='
//         }, 1000)
//         return {
//             msg,
//             show,
//             test,
//         }
//     },
// })
</script>
