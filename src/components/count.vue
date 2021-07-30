<template>
    <h1>{{ msg }}</h1>
    <p>count is {{ count }}</p>
    <button @click="inc">增加</button>
    <button @click="dec">减少</button>
    <button @click="reset">重置</button>
</template>
<script lang="ts">
import { ref } from 'vue'
import useCount from '@/components/useCount'
export default {
    name: 'CountDemo',
    props: {
        msg: String,
    },
    setup() {
        const {
            current: count,
            inc,
            dec,
            set,
            reset,
        } = useCount(2, {
            min: 1,
            max: 15,
        })

        const msg = ref('Demo useCount')
        return {
            count,
            inc,
            dec,
            set,
            reset,
            msg,
        }
    },
}
</script>
