import { userServices } from "../services/user.service.js"

export const getCurrentUser = (req, res) => {

    return res.json(req.user);
}