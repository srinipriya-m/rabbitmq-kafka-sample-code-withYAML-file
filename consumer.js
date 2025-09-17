const { Kafka } = require('kafkajs');

// Kafka client configuration
const kafka = new Kafka({
  clientId: 'my-consumer-app',
  brokers: ['localhost:9092'], // Kafka broker addresses
});

// Create a consumer instance
const consumer = kafka.consumer({ groupId: 'test-group' });

const consumeMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

consumeMessages().catch(console.error);