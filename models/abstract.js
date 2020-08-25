const { Schema, model } = require('mongoose');

const abstractSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  significance: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  knowledgeGap: {
    type: String,
  },
  researchQuestion: {
    type: String,
  },
  hypothesis: {
    type: String,
  },
  majorTrends: {
    type: String,
  },
  conclusion: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
});

module.exports = model('Abstract', abstractSchema);
