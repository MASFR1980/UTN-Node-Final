const getUser = (req, res) => {
    res.json({ loggedUser: req.userId })
}

export { getUser }
