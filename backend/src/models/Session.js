import mongoose from 'mongoose';
const schema = new mongoose.Schema({ sessionId: { type: String, unique: true, required: true }, mysteryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mystery', required: true }, viewedEvidenceIds: { type: [String], default: [] }, bookmarkedEvidenceIds: { type: [String], default: [] }, detectiveNotes: { type: String, default: '' }, selectedSuspectId: String, accusationReason: String, isSubmitted: { type: Boolean, default: false }, result: mongoose.Schema.Types.Mixed }, { timestamps: true });
export default mongoose.model('Session', schema);
