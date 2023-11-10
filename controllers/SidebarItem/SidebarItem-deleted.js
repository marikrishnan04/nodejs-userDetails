const SidebarItem = require("../../models/sidebarItem/sidebarItem");


exports.SidebarItemDelete=( async (req, res) => {
    try {
      const deletedSidebarItem = await SidebarItem.findByIdAndRemove(req.params.id);
      if (!deletedSidebarItem) {
        return res.status(404).json({ error: 'SidebarItem not found' });
      }
      res.json(deletedSidebarItem);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
 