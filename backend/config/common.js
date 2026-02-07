export const config = {
    PORT: 5000,

    MSG: {
        WELCOME: "API is ready",
    },

    SUCCESS: {
        SERVER: "Server is running on port:",
        TASK: {
            FETCHED: "Tasks fetched successfully",
            NO_TASKS: "No task available",
            FOUND: "Task found",
            CREATED: "Task created successfully",
            UPDATED: "Task updated successfully",
            DELETED: "Task deleted successfully",
        },
    },

    STATUS: {
        VALIDATION_ERROR: { CODE: 400, TITLE: "Validation error" },
        NOT_FOUND: { CODE: 404, TITLE: "Not found" },
        SERVER_ERROR: { CODE: 500, TITLE: "Server error" },
        DEFAULT_ERROR: { CODE: 500, TITLE: "Unexpected error occurred" },
    },

    ERROR: {
        TASK: {
            NOT_FOUND: "Task not found",
            TITLE_REQUIRED: "Title is required and cannot be empty",
            TITLE_MIN_LENGTH: "Title must be at least 3 characters",
            TITLE_MAX_LENGTH: "Title must not exceed 255 characters",
            COMPLETED_INVALID: "Completed must be a boolean",
        },
        INVALID_JSON: "Invalid JSON",
        ROUTE_NOT_FOUND: "Route not found",
    },

    VALIDATION: {
        TASK: { TITLE_MIN: 3, TITLE_MAX: 255 },
    },
};
