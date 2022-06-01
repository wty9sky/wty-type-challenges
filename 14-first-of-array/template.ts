// 原
// export type First<T extends any[]> = any

// 改
type First<T extends any[]> = T extends []?never:T[0]
type First<T extends any[]> = T['length'] extends 0?never:T[0]
type First<T extends any[]> = T extends [infer P,...infer Other]?P:never

// infer
// 在extends语句中，支持infer关键字，可以推断一个类型变量，高效的对类型进行模式匹配。但是，这个类型变量只能在true的分支中使用。
// https://www.tslang.cn/docs/release-notes/typescript-2.8.html
