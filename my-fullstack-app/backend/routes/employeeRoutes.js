const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();

// GET all employees or filter by department
router.get('/', async (req, res) => {
  try {
    const { department } = req.query;
    const filter = department ? { department } : {};
    const employees = await Employee.find(filter);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new employee
router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an employee
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(404).json({ message: "Employee not found" });
  }
});

// DELETE an employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Employee not found" });
  }
});

module.exports = router;