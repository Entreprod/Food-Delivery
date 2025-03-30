const orders = []; // Local orders array

exports.createOrder = (req, res) => {
  const { user, items, total, address } = req.body;
  const newOrder = {
    id: orders.length + 1,
    user,
    items,
    total,
    address,
    status: 'En attente',
    createdAt: new Date()
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

exports.getOrderById = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: 'Commande non trouvée' });
  res.json(order);
};

exports.getUserOrders = (req, res) => {
  const userOrders = orders.filter(o => o.user === req.params.userId);
  res.json(userOrders);
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ message: 'Commande non trouvée' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};