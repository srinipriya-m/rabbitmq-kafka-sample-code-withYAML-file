const amqp = require('amqplib');

async function processPayments() {
  const conn = await amqp.connect('amqp://admin:admin@localhost:5672');
  const channel = await conn.createChannel();
  
  await channel.assertExchange('payments', 'topic', { durable: true });
  const queue = await channel.assertQueue('payments', { durable: true });
  channel.bindQueue(queue.queue, 'payments', 'payments.created');
  
  channel.consume(queue.queue, (msg) => {
    console.log('Test');
    const payments = JSON.parse(msg.content.toString());
    console.log(payments);
    console.log(`Processing payment for order ${payments}`);
    channel.ack(msg);
  });
}

processPayments();