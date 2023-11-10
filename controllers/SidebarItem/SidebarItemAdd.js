const SidebarItem = require('../../models/sidebarItem/sidebarItem');
const validateSidebarItem = require('../../models/sidebarItem/sidebarItem.joi');
// Create a new SidebarItem

exports.SidebarItemAdd=( async (req, res) => {
  try {
    const { error } = validateSidebarItem(req.body);

    if (error) {
      return res.status(400).send({ error: error.details.map((detail) => detail.message) });
    }

    const newSidebarItem = new SidebarItem(req.body);
    const savedSidebarItem = await newSidebarItem.save();
    res.status(201).send({ message: "Success",savedSidebarItem});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});