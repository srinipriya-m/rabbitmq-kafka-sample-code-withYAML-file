const { Kafka } = require('kafkajs');

// Kafka client configuration
const kafka = new Kafka({
  clientId: 'my-producer-app',
  brokers: ['localhost:9092'], // Kafka broker addresses
});

// Create a producer instance
const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();

  // Send a message to the 'test-topic' topic
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello, Kafka from Producer! New message!!' },
    ],
  });

  console.log('Message sent successfully');
  await producer.disconnect();
};

produceMessage().catch(console.error);