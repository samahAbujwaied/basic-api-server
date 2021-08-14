'use strict';
const express = require('express');
const router = express.Router();
const {clothesData} = require('../models/index');

router.get('/clothes', getclothesData);
router.get('/clothes/:id', getOneclothesData);
router.post('/clothes', createclothesData);
router.put('/clothes/:id', updateclothesData);
router.delete('/clothes/:id', deleteclothesData);

async function getclothesData(req, res) {
    let clothes = await clothesData.findAll();
    res.status(200).json(clothes);
}
async function getOneclothesData(req, res) {
    const id = parseInt(req.params.id); 
    let clothes = await clothesData.findOne({ where: {id: id} });
    res.status(200).json(clothes);
}
async function createclothesData(req, res) {
    let newclothesData = req.body;
    let clothes = await clothesData.create(newclothesData);
    res.status(200).json(clothes);
}
async function updateclothesData(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await clothesData.findOne({ where: {id: id} });
    let updatedclothesData = await found.update(obj);
    res.status(200).json(updatedclothesData);
}
async function deleteclothesData(req,res) {
    let id = parseInt(req.params.id);
    let deletedclothesData = await clothesData.destroy({where: {id: id}});
    res.status(204).json(deletedclothesData);
}

module.exports = router;