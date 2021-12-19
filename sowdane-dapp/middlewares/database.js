import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://gekkoblaze:4JpuLcF7RrqavXA@cluster0.et2hk.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('Sowdane-dapp');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;