const supabase = require('../supabase')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.sendStatus(401)

  const token = authHeader.replace('Bearer ', '')

  const { data, error } = await supabase.auth.getUser(token)

  if (error) return res.sendStatus(403)

  req.user = data.user
  next()
}
