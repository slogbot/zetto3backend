const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function wipeCollections() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const collectionsToDrop = ['cards', 'users', 'games'];
    const existingCollections = await mongoose.connection.db.listCollections().toArray();

    for (const { name } of existingCollections) {
      if (collectionsToDrop.includes(name.toLowerCase())) {
        await mongoose.connection.db.dropCollection(name);
        console.log(`🗑️ Dropped collection: ${name}`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error wiping collections:', err.message);
    process.exit(1);
  }
}

wipeCollections();
