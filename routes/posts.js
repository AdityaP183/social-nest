import express from "express";
import {  } from "../controllers/user.js";

const router = express.Router();

router.route('/').get().post()
router.route('/:postId').get().patch().delete()

export default router