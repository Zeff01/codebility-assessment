import mongoose, {Schema} from "mongoose";

const todoListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
}, {timestamps: true});

export default mongoose.model('Task', todoListSchema);