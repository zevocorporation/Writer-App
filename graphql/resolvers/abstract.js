const Abstract = require('../../models/abstract');
const { noOfWords } = require('../../helpers/wordsCount');

exports.queryResolver = {
  getUserAbstractDocument: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthorized access. Please login.');
      const particularAbstract = await Abstract.findById(args.abstractId);
      if (!particularAbstract) {
        throw new Error("We don't have such abstract. Please check again.");
      }
      return particularAbstract;
    } catch (err) {
      throw err;
    }
  },

  getUserAbstracts: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthorized access. Please login.');
      const allAbstract = await Abstract.find({ userId: req.userId });
      if (allAbstract[0]) {
        return allAbstract;
      }
      throw new Error("You haven't created any abstracts. Create one.");
    } catch (err) {
      throw err;
    }
  },
};

exports.mutationResolver = {
  createAbstract: async (_, args, { req }) => {
    try {
      if (args.abstractInput.subject.trim().length == 0) {
        throw new Error('Please enter subject');
      }
      if (args.abstractInput.subject.trim().length > 20) {
        throw new Error('Subject should contain only 20 characters');
      }
      if (args.abstractInput.title.trim().length == 0) {
        throw new Error('Please enter title');
      }
      if (args.abstractInput.title.trim().length > 30) {
        throw new Error('Title should contain only 30 characters');
      }
      if (args.abstractInput.significance.trim().length == 0) {
        throw new Error('Please enter significance');
      }
      if (noOfWords(args.abstractInput.significance) > 25) {
        throw new Error('Significance should contain only 25 words');
      }
      if (noOfWords(args.abstractInput.description) > 35) {
        throw new Error('Description should contain only 35 words');
      }
      if (noOfWords(args.abstractInput.knowledgeGap) > 35) {
        throw new Error('Knowledge gap should contain only 35 words');
      }
      if (noOfWords(args.abstractInput.researchQuestion) > 35) {
        throw new Error('Research question should contain only 35 words');
      }
      if (noOfWords(args.abstractInput.hypothesis) > 35) {
        throw new Error('Hypothesis should contain only 35 words');
      }
      if (noOfWords(args.abstractInput.majorTrends) > 35) {
        throw new Error('Major trends should contain only 35 words');
      }
      if (args.abstractInput.conclusion.trim().length == 0) {
        throw new Error('Please enter conclusion');
      }
      if (noOfWords(args.abstractInput.conclusion) > 35) {
        throw new Error('Conclusion should contain only 35 words');
      }
      if (noOfWords(args.abstractInput.abstract) > 235) {
        throw new Error('Your abstract should contain only 235 words');
      }
      const newAbstract = new Abstract({
        userId: req.userId,
        subject: args.abstractInput.subject.trim(),
        title: args.abstractInput.title.trim(),
        significance: args.abstractInput.significance.trim(),
        description: args.abstractInput.description.trim(),
        knowledgeGap: args.abstractInput.knowledgeGap.trim(),
        researchQuestion: args.abstractInput.researchQuestion.trim(),
        hypothesis: args.abstractInput.hypothesis.trim(),
        majorTrends: args.abstractInput.majorTrends.trim(),
        conclusion: args.abstractInput.conclusion.trim(),
        abstract: args.abstractInput.abstract.trim(),
      });
      const result = await newAbstract.save();
      return result;
    } catch (err) {
      throw err;
    }
  },
  updateAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthorized access. Please login.');
      const getAbstract = await Abstract.findById(args.updateAbstractInput._id);
      if (!getAbstract) {
        throw new Error("We don't have such abstract. Please check again.");
      }
      if (args.updateAbstractInput.title.trim().length == 0) {
        throw new Error('Please enter title');
      }
      if (args.updateAbstractInput.title.trim().length > 30) {
        throw new Error('Title should contain only 30 characters');
      }
      if (args.updateAbstractInput.significance.trim().length == 0) {
        throw new Error('Please enter significance');
      }
      if (noOfWords(args.updateAbstractInput.significance) > 25) {
        throw new Error('Significance should contain only 25 words');
      }
      if (noOfWords(args.updateAbstractInput.description) > 35) {
        throw new Error('Description should contain only 35 words');
      }
      if (noOfWords(args.updateAbstractInput.knowledgeGap) > 35) {
        throw new Error('Knowledge gap should contain only 35 words');
      }
      if (noOfWords(args.updateAbstractInput.researchQuestion) > 35) {
        throw new Error('Research question should contain only 35 words');
      }
      if (noOfWords(args.updateAbstractInput.hypothesis) > 35) {
        throw new Error('Hypothesis should contain only 35 words');
      }
      if (noOfWords(args.updateAbstractInput.majorTrends) > 35) {
        throw new Error('Major trends should contain only 35 words');
      }
      if (args.updateAbstractInput.conclusion.trim().length == 0) {
        throw new Error('Please enter conclusion');
      }
      if (noOfWords(args.updateAbstractInput.conclusion) > 35) {
        throw new Error('Conclusion should contain only 35 words');
      }
      if (noOfWords(args.updateAbstractInput.abstract) > 235) {
        throw new Error('Your abstract should contain only 235 words');
      }
      (getAbstract.title = args.updateAbstractInput.title.trim()),
        (getAbstract.significance = args.updateAbstractInput.significance.trim()),
        (getAbstract.description = args.updateAbstractInput.description.trim()),
        (getAbstract.knowledgeGap = args.updateAbstractInput.knowledgeGap.trim()),
        (getAbstract.researchQuestion = args.updateAbstractInput.researchQuestion.trim()),
        (getAbstract.hypothesis = args.updateAbstractInput.hypothesis.trim()),
        (getAbstract.majorTrends = args.updateAbstractInput.majorTrends.trim()),
        (getAbstract.conclusion = args.updateAbstractInput.conclusion.trim()),
        (getAbstract.abstract = args.updateAbstractInput.abstract.trim());
      const editedAbstract = await getAbstract.save();
      return editedAbstract;
    } catch (err) {
      throw err;
    }
  },
  deleteAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthorized access. Please login.');
      const abstractToDelete = await Abstract.findByIdAndDelete(
        args.abstractId
      );
      return abstractToDelete;
    } catch (err) {
      throw err;
    }
  },
};
