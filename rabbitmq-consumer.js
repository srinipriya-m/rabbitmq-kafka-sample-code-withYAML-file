const amqp = require('amqplib');

async function processPayments() {
  const conn = await amqp.connect('amqp://admin:admin@localhost:5672');
  const channel = await conn.createChannel();
  
  await channel.assertExchange('orders', 'topic', { durable: true });
  const queue = await channel.assertQueue('payments', { durable: true });
  channel.bindQueue(queue.queue, 'orders', 'order.created');
  
  channel.consume(queue.queue, (msg) => {
    const order = JSON.parse(msg.content.toString());
    //console.log(`Processing payment for order ${JSON.stringify(order)}`);
    channel.ack(msg);
  });

  const payment = { id : 'ASD@##$%987', message : 'Success'}

  await channel.assertExchange('payments', 'topic', { durable: true });
  channel.publish('payments', 'payments.created', Buffer.from(JSON.stringify(payment)), { persistent: true });

}



processPayments();
