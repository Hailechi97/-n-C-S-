const Department = require("../models/departmentModel");

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await Department.update(req.body, {
      where: {
        DeptID: req.params.id,
      },
    });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.destroy({
      where: {
        DeptID: req.params.id,
      },
    });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
