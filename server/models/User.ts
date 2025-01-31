import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'adviser' | 'panelist';
  profileImage: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'adviser', 'panelist'] },
  profileImage: { type: String, required: false },
});

const User = model<IUser>('User', userSchema);

export default User;
