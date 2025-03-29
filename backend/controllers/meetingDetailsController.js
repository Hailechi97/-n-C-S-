const MeetingDetail = require("../models/meetingDetailModel");

const getAllMeetingDetails = async (req, res) => {
  try {
    const meetingDetails = await MeetingDetail.findAll();
    res.json(meetingDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMeetingDetail = async (req, res) => {
  try {
    const meetingDetail = await MeetingDetail.create(req.body);
    res.json(meetingDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMeetingDetail = async (req, res) => {
  try {
    const meetingDetail = await MeetingDetail.update(req.body, {
      where: {
        DetailID: req.params.id,
      },
    });
    res.json(meetingDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMeetingDetail = async (req, res) => {
  try {
    const meetingDetail = await MeetingDetail.destroy({
      where: {
        DetailID: req.params.id,
      },
    });
    res.json(meetingDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMeetingDetails,
  createMeetingDetail,
  updateMeetingDetail,
  deleteMeetingDetail,
};
