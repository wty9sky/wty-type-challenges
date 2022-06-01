# English:
Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example
``` typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```


# 中文：
实现 TS 内置的 Pick<T, K>，但不可以使用它。

从类型 T 中选择出属性 K，构造成一个新的类型。

例如：
``` typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
``` typescript
