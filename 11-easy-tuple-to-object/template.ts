// 原
// type TupleToObject<T extends readonly any[]> = any

// 改

export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [K in T[number]]:K
}