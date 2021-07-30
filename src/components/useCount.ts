import { ref, Ref, watch } from 'vue'
interface Range {
    min?: number
    max?: number
}
interface Result {
    current: Ref<number>
    inc: (delta?: number | MouseEvent) => void
    dec: (delta?: number | MouseEvent) => void
    set: (value: number) => void
    reset: () => void
}
// hooks函数
export default function useCount(initialVal: number, range?: Range): Result {
    const current = ref(initialVal)
    // 增加
    const inc = (delta?: number | MouseEvent): void => {
        if (typeof delta === 'number') {
            current.value += delta
        } else {
            current.value += 1
        }
    }
    // 减少
    const dec = (delta?: number | MouseEvent): void => {
        if (typeof delta === 'number') {
            current.value -= delta
        } else {
            current.value -= 1
        }
    }
    // 设置
    const set = (value: number): void => {
        current.value = value
    }
    // 重置
    const reset = (): void => {
        current.value = initialVal
    }

    watch(current, (newVal: number, oldVal: number) => {
        if (oldVal === newVal) return
        if (range && range.min && newVal < range.min) {
            current.value = range.min
        } else if (range && range.max && newVal > range.max) {
            current.value = range.max
        }
    })
    return {
        current,
        inc,
        dec,
        set,
        reset,
    }
}
