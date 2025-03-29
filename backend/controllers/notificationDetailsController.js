const NotificationDetail = require("../models/notificationDetailModel");

const getAllNotificationDetails = async (req, res) => {
  try {
    const notificationDetails = await NotificationDetail.findAll();
    res.json(notificationDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNotificationDetail = async (req, res) => {
  try {
    const notificationDetail = await NotificationDetail.create(req.body);
    res.json(notificationDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNotificationDetail = async (req, res) => {
  try {
    const notificationDetail = await NotificationDetail.update(req.body, {
      where: {
        DetailID: req.params.id,
      },
    });
    res.json(notificationDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNotificationDetail = async (req, res) => {
  try {
    const notificationDetail = await NotificationDetail.destroy({
      where: {
        DetailID: req.params.id,
      },
    });
    res.json(notificationDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotificationDetails,
  createNotificationDetail,
  updateNotificationDetail,
  deleteNotificationDetail,
};
