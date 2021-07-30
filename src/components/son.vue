<template>
    <div>
        <h2>子组件</h2>
        <hr />
        <Grandson></Grandson>
    </div>
</template>
<script lang="ts">
import Grandson from '@/components/grandSon.vue'
export default {
    name: 'Son',
    components: {
        Grandson,
    },
}
</script>
