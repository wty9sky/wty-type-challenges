// 原
// type MyReadonly<T> = any

// 改

type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}