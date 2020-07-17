const { Schema, model } = require('mongoose');

const abstractSchema = new Schema(
  {
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
      required: true,
    },
    knowledgeGap: {
      type: String,
      required: true,
    },
    researchQuestion: {
      type: String,
      required: true,
    },
    hypothesis: {
      type: String,
      required: true,
    },
    majorTrends: {
      type: String,
      required: true,
    },
    conclusion: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Abstract', abstractSchema);
