const SidebarItem = require("../../models/sidebarItem/sidebarItem");


exports.SidebarItemDelete=( async (req, res) => {
    try {
      const deletedSidebarItem = await SidebarItem.findByIdAndRemove(req.params.id);
      if (!deletedSidebarItem) {
        return res.status(404).send({ error: 'SidebarItem not found' });
      }
      res.status(200).send({message: "Success",deletedSidebarItem});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
 