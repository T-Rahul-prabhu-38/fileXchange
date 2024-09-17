import mongoose from "mongoose";

mongoose.connect('mongodb:127.0.0.1:27017/fileXchange',{});

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Export the mongoose object
export { db };