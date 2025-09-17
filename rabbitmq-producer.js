const amqp = require('amqplib');

async function sendOrderEvent(order) {
  const conn = await amqp.connect('amqp://admin:admin@localhost:5672');
  const channel = await conn.createChannel();
  await channel.assertExchange('orders', 'topic', { durable: true });
  channel.publish('orders', 'order.created', Buffer.from(JSON.stringify(order)), { persistent: true });
  
  console.log(`Order ${order.id} published`);
  await channel.close();
  await conn.close();
}

sendOrderEvent({ id: 123, product: 'Laptop', amount: 999 });