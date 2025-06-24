// Validation middleware for todo creation
export const validateTodo = (req, res, next) => {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({
            error: 'Title is required and must be a non-empty string'
        });
    }

    next();
};
