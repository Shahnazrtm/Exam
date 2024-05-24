// const express = require("express")
const Product = require("../module/prodSchema.js")


const GetAllData = async (req, res) => {
	try {
		const product = await Product.find()
		res.status(200).send(product)
	} catch {
		res.status(404)
		res.send({
			succes: false,
			message: ("Data not found")
		})
	}
}


const GetDataById = async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id })
		res.send(product)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

const deleteById = async (req, res) => {
	try {
		await Product.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}


const patchData = async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id })

		if (req.body.name) {
			product.name = req.body.name
		}

		if (req.body.image) {
			product.image = req.body.image
		}

		await product.save()
		res.send(product)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}


const postData = async (req, res) => {
	const product = new Product({
		name: req.body.name,
		image: req.body.image,
		price: req.body.price
	})
	await product.save()
	res.send(product)
}

module.exports = { GetAllData, GetDataById, deleteById, postData ,patchData}
