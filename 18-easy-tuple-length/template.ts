// 原
// type Length<T> = any

// 改
// type Length<T extends readonly (string)[]> = T['length']
type Length<T extends Readonly<(string)[]>> = T['length']