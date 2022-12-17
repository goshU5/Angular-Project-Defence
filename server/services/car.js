const Car = require("../models/Car")
const User = require("../models/User")
require('dotenv').config()
const addCar = async (car, id) => {
    try {
        car.owner = id;
        return await Car.create({ ...car })
    } catch (error) {
        throw new Error(error)
    }
}
const getAllCars = async () => {
    return await Car.find({})
}
const getOneCar = async (id) => {
    return await Car.findById(id).populate('owner addedBy')
}
const getProfileCars = async (_id) => {
    return await Car.find({ owner: _id })
}
const editCar = async (id, data) => {
    try {
        return await Car.findByIdAndUpdate(id, { ...data }, { runValidators: true })
    } catch (error) {
        throw new Error(error)
    }
}
const deleteACar = async (id) => {
    await Car.findByIdAndDelete(id)
}

module.exports = {
    deleteACar,
    editCar,
    getProfileCars,
    getOneCar,
    getAllCars,
    addCar,
}
