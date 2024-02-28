import express from "express";
import { register, logIn, logOut } from "../controllers/auth.js";

const router = express.Router();

router.post('/login', logIn)
router.post('/register', register)
router.get('/logout', logOut)

export default router