import mongoose from 'mongoose';
const schema = new mongoose.Schema({ publicCase: { type: mongoose.Schema.Types.Mixed, required: true }, solution: { type: mongoose.Schema.Types.Mixed, required: true }, culpritId: { type: String, required: true }, originalScenario: String }, { timestamps: true });
export default mongoose.model('Mystery', schema);
