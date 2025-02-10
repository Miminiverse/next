import mongoose from 'mongoose';

// Check if the model is already defined to prevent overwriting
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        required: [true, 'Please provide content']
    },
}, {
    timestamps: true
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;