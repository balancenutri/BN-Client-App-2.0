import mongoose from 'mongoose';

// Define the schema for Registration
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String },
  password: { type: String },
  profile: { type: String }
});

// Create the Registration model based on the schema
const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
