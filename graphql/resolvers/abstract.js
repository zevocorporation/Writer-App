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
      if (args.abstractInput.description.trim().length == 0) {
        throw new Error('Please enter description');
      }
      if (noOfWords(args.abstractInput.description) > 35) {
        throw new Error('Description should contain only 35 words');
      }
      if (args.abstractInput.knowledgeGap.trim().length == 0) {
        throw new Error('Please enter knowledge gap');
      }
      if (noOfWords(args.abstractInput.knowledgeGap) > 35) {
        throw new Error('Knowledge gap should contain only 35 words');
      }
      if (args.abstractInput.researchQuestion.trim().length == 0) {
        throw new Error('Please enter research question');
      }
      if (noOfWords(args.abstractInput.researchQuestion) > 35) {
        throw new Error('Research question should contain only 35 words');
      }
      if (args.abstractInput.hypothesis.trim().length == 0) {
        throw new Error('Please enter hypothesis');
      }
      if (noOfWords(args.abstractInput.hypothesis) > 35) {
        throw new Error('Hypothesis should contain only 35 words');
      }
      if (args.abstractInput.majorTrends.trim().length == 0) {
        throw new Error('Please enter major trends');
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
      if (args.abstractInput.abstract.trim().length == 0) {
        throw new Error('Please enter your abstract');
      }
      if (noOfWords(args.abstractInput.abstract) > 200) {
        throw new Error('Your abstract should contain only 200 words');
      }
      const newAbstract = new Abstract({
        userId: req.userId,
        subject: args.abstractInput.subject,
        title: args.abstractInput.title,
        significance: args.abstractInput.significance,
        description: args.abstractInput.description,
        knowledgeGap: args.abstractInput.knowledgeGap,
        researchQuestion: args.abstractInput.researchQuestion,
        hypothesis: args.abstractInput.hypothesis,
        majorTrends: args.abstractInput.majorTrends,
        conclusion: args.abstractInput.conclusion,
        abstract: args.abstractInput.abstract,
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
      if (args.updateAbstractInput.description.trim().length == 0) {
        throw new Error('Please enter description');
      }
      if (noOfWords(args.updateAbstractInput.description) > 35) {
        throw new Error('Description should contain only 35 words');
      }
      if (args.updateAbstractInput.knowledgeGap.trim().length == 0) {
        throw new Error('Please enter knowledge gap');
      }
      if (noOfWords(args.updateAbstractInput.knowledgeGap) > 35) {
        throw new Error('Knowledge gap should contain only 35 words');
      }
      if (args.updateAbstractInput.researchQuestion.trim().length == 0) {
        throw new Error('Please enter research question');
      }
      if (noOfWords(args.updateAbstractInput.researchQuestion) > 35) {
        throw new Error('Research question should contain only 35 words');
      }
      if (args.updateAbstractInput.hypothesis.trim().length == 0) {
        throw new Error('Please enter hypothesis');
      }
      if (noOfWords(args.updateAbstractInput.hypothesis) > 35) {
        throw new Error('Hypothesis should contain only 35 words');
      }
      if (args.updateAbstractInput.majorTrends.trim().length == 0) {
        throw new Error('Please enter major trends');
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
      if (args.updateAbstractInput.abstract.trim().length == 0) {
        throw new Error('Please enter your abstract');
      }
      if (noOfWords(args.updateAbstractInput.abstract) > 200) {
        throw new Error('Your abstract should contain only 200 words');
      }
      (getAbstract.title = args.updateAbstractInput.title),
        (getAbstract.significance = args.updateAbstractInput.significance),
        (getAbstract.description = args.updateAbstractInput.description),
        (getAbstract.knowledgeGap = args.updateAbstractInput.knowledgeGap),
        (getAbstract.researchQuestion =
          args.updateAbstractInput.researchQuestion),
        (getAbstract.hypothesis = args.updateAbstractInput.hypothesis),
        (getAbstract.majorTrends = args.updateAbstractInput.majorTrends),
        (getAbstract.conclusion = args.updateAbstractInput.conclusion),
        (getAbstract.abstract = args.updateAbstractInput.abstract);
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
