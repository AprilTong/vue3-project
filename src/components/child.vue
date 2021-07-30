<template>
    <h2>子组件</h2>
    <h3 @click="emitFn">msg: {{ msg }}</h3>
    <input type="text" ref="inputRef" v-model="input" />
    <h3>wife: {{ user.wife }}</h3>
    <h3>name: {{ user.name }}</h3>
    <el-button type="primary" @click="updateUser" size="mini">更新</el-button>
    <h3>计算属性：{{ computedName }}</h3>
    <h3>监听的name: {{ watchName }}</h3>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive, computed, watch } from 'vue'
export default defineComponent({
    name: 'Child',
    props: ['msg'],
    setup(props, { attrs, slots, emit }) {
        // console.log('props', props.msg)
        // console.log('attrs', attrs)
        const inputRef = ref<HTMLElement | null>(null)
        onMounted(() => {
            inputRef.value && inputRef.value.focus()
        })
        const emitFn = () => {
            // console.log('子组件')
            emit('show', 'april')
        }
        // 定义响应式对象
        const user = reactive({
            name: 'April',
            firstName: 'tong',
            wife: {
                like: 'swimming',
                books: ['红宝书', '犀牛书'],
            },
        })
        const updateUser = () => {
            user.name = 'bran'
            user.wife.books[0] = '暗时间'
        }
        // 计算属性
        const computedName = computed(() => {
            return user.firstName + '_' + user.name
        })
        const watchName = ref('')

        watch(user, ({ firstName, name }) => {
            watchName.value = firstName + '_' + name
        })
        // watch监听
        return {
            emitFn,
            input: '123',
            inputRef,
            user,
            updateUser,
            computedName,
            watchName,
        }
    },
})
</script>
