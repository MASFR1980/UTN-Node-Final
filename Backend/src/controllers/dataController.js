import { Data } from "../models/dataModels.js";

export const createData = async (req, res) => {
  try {
    const { name, CUIT, category, address, phone, email } = req.body;

    
    const existingData = await Data.findOne({ name });
    if (existingData) {
      return res.status(400).json({ message: "Ya existe un registro con ese nombre" });
    }

    const newData = new Data({ name, CUIT, category, address, phone, email });
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "No se encontró el registro" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateData = async (req, res) => {
  try {
    const { name, CUIT, category, address, phone, email } = req.body;
    
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      { name, CUIT, category, address, phone, email },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "No se encontró el registro" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteData = async (req, res) => {
  try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: "No se encontró el registro" });
    }
    res.status(200).json({ message: "Eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

