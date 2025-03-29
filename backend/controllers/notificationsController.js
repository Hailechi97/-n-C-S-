const Notification = require("../models/notificationModel");

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.update(req.body, {
      where: {
        NotificationID: req.params.id,
      },
    });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.destroy({
      where: {
        NotificationID: req.params.id,
      },
    });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
};
