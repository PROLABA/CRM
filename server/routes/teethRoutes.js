import express from 'express'
import {getTeethList} from "../controllers/teeth/getList.js";
import {getTeethSectionsList} from "../controllers/teeth/getTeethSectionsList.js";
const router = express.Router()

router.route('/list').get(getTeethList)
router.route('/listSections').get(getTeethSectionsList)

export default router
