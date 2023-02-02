import express from 'express';

import ToursController from './tours.controller.js'

const router = express.Router();

//router.route(" route ").get/post/put/delete();
router.route("/tours").get(ToursController.apiGetAllTours);


export default router;