const SidebarItem = require("../../models/sidebarItem/sidebarItem");


exports.SidebarItemUpdated=( async (req, res) => {
    try {
      const updatedSidebarItem = await SidebarItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedSidebarItem) {
        return res.status(404).send({ error: 'SidebarItem not found' });
      }
      res.status(200).send({ message: "Success",updatedSidebarItem});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });