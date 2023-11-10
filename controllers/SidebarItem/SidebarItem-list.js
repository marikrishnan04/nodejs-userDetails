const SidebarItem = require("../../models/sidebarItem/sidebarItem");

exports.SidebarItemList=( async (req, res) => {
  try {
    // Sort the SidebarItem collection by the 'employee' field in ascending order
    const SidebarItems = await SidebarItem.find()   

    res.status(200).send(SidebarItems);
} catch (err) {
    res.status(400).send('error: ' + err);
}

});

