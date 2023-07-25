const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')

/* CREATE */
router.post('/create', async (req, res) => {
    const { username, password } = req.body

    const results = await CreateService(username, password)

    if (results){
        res
        .status(200)
        .send({
            status: results,
            message: "Successfully created"
        })
    } else {
        res
        .status(500)
        .send({
            status: results,
            message: "Failed to create"
        })
    }
})

/* RETRIEVE */
router.get('/retrieve', async (req, res) => {
    const { fields } = req.query

    const results = await RetrieveService(fields)

    if (results){
        res
        .status(200)
        .send(results)
    } else {
        res
        .status(500)
        .send({
            status: results,
            message: "Failed to retrieve"
        })
    }
})


/* UPDATE */
router.post('/update', async (req, res) => {
    const { id, newUsername, newPassword } = req.body

    const results = await UpdateService( id, newUsername, newPassword )

    if (results){
        res
        .status(200)
        .send({
            status: results,
            message: "Successfully updated"
        })
    } else {
        res
        .status(500)
        .send({
            status: results,
            message: "Failed to update"
        })
    }
})

/* DELETE */
router.get('/delete', async (req, res) => {
    const { id } = req.query

    const results = await DeleteService(id)

    if (results){
        res
        .status(200)
        .send({
            status: results,
            message: "Successfully deleted"
        })
    } else {
        res
        .status(500)
        .send({
            status: results,
            message: "Failed to delete"
        })
    }
})


module.exports = router