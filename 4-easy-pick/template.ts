/*
 * @Author: Wty9sky
 * @Date: 2022-02-18 16:39:51
 * @LastEditors: Wty9sky
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
// 原
// type MyPick<T, K> = any

// 改
type MyPick<T, K extends keyof T>  = {
    [P in K]:T[P]
}