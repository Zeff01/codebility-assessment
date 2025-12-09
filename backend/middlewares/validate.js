const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors
    });
  }
  req.validated = result.data;

  next();
};

module.exports = validate ;