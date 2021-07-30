<template>
    <Suspense>
        <template v-slot:default>
            <Async></Async>
        </template>
        <template v-slot:fallback>
            <h1>LOADING...</h1>
        </template>
    </Suspense>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
const Async = defineAsyncComponent(() => import('@/components/async.vue'))
export default {
    name: 'Suspense',
    setup() {
        return {}
    },
    components: {
        Async,
    },
}
</script>
