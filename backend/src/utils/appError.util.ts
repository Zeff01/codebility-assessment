

class AppError extends Error {
    constructor(
        public statusCode: number,
        public error: string
    ) {
        super(error);
    }
}

export default AppError;