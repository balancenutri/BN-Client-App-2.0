import express from "express";
import { email_login } from "../controllers/authController.js";
import { validationResult } from "express-validator";
import { validateFields } from "/common/Validation.js";
import Registration from "../models/registration.js";
import { programDetails } from "../controllers/programIntroController.js";
const router = express.Router();


// router.post("/email_login", validateFields(['email', 'password','token','format','source','os','model','appversion','fcm_token','notification_flag']), (req, res, next) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         const errorMessages = errors.array().map(error => error.msg);
//         return res.status(400).json({ "status":false,"message": errorMessages[0] });
//     }

//     email_login(req, res, next);
// });

// // router.post("/programDetails",programDetails(req, res));

// router.post('/insert', async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const newUser = new Registration({ name, email, password });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   router.get('/getData', async (req, res) => {
//     try {
//       const users = await Registration.find();
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   router.put('/updateData/:id', async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const updatedUser = await Registration.findByIdAndUpdate(req.params.id, { name, email, password }, { new: true });
//       if (!updatedUser) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       res.status(200).json(updatedUser);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
export default router;
