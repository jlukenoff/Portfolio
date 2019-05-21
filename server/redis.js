import redis from 'redis';

const client = redis.createClient(process.env.REDIS_URL);

client.on('connect', () => {
  console.log('client connected');
});

export default client;
