//validate zod schema
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      error: result.error.flatten().fieldErrors,
    })
  }

  req.body = result.data

  next()
}

//see if id exists in the todos array
export const validateParams = (todos) => (req, res, next) => {
  const { id } = req.params

  const todo = todos.find((todo) => todo.id === id)

  if (!todo) return res.status(404).json({ msg: "Todo not found" })

  req.todo = todo
  next()
}
