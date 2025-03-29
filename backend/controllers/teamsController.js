const Team = require("../models/teamModel");

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const team = await Team.update(req.body, {
      where: {
        TeamID: req.params.id,
      },
    });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const team = await Team.destroy({
      where: {
        TeamID: req.params.id,
      },
    });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTeams,
  createTeam,
  updateTeam,
  deleteTeam,
};
