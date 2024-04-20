const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({studentId: String, timeCompleted: Date, result: Number});

const User = mongoose.model('User', studentSchema);

export default User;
