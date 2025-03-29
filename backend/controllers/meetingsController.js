const Meeting = require("../models/meetingModel");

const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.create(req.body);
    res.json(meeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.update(req.body, {
      where: {
        MeetingID: req.params.id,
      },
    });
    res.json(meeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.destroy({
      where: {
        MeetingID: req.params.id,
      },
    });
    res.json(meeting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMeetings,
  createMeeting,
  updateMeeting,
  deleteMeeting,
};
