// 原
// type MyPick<T, K> = any

// 改
export type MyPick<T, K extends keyof T>  = {
    [P in K]:T[P]
}