const Request = require("../models/requestModel");

const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRequest = async (req, res) => {
  try {
    const request = await Request.update(req.body, {
      where: {
        RequestID: req.params.id,
      },
    });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const request = await Request.destroy({
      where: {
        RequestID: req.params.id,
      },
    });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRequests,
  createRequest,
  updateRequest,
  deleteRequest,
};
