import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI ='';

mongoose.connect(MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Database connection error:', err);
});
