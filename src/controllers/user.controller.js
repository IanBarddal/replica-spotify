export const getCurrentUser = (req, res) => {

    return res.json(req.user);
};