// 原
// type MyReadonly<T> = any

// 改

export type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}