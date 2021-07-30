<template>
    <h2>async 组件</h2>
    <p>{{ msg }}</p>
</template>
<script lang="ts">
export default {
    name: 'Async',
    setup() {
        let msg = ''
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    msg: 'abc',
                })
            }, 2000)
        })
        return {
            msg,
        }
    },
}
</script>
