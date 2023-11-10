const mongoose = require('mongoose');



const sidebarItemSchema = new mongoose.Schema({
    id: Number,
    label: String,
    parent_id: { type: Number, default: null },
    icon: String,
    order_index: Number,
    url: String,
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SidebarItem' }],
  });
  
  const SidebarItem = mongoose.model('SidebarItem', sidebarItemSchema);

  module.exports=SidebarItem