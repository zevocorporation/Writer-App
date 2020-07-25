const Abstract = require('../../models/abstract');

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
      return err;
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
      return err;
    }
  },
};

exports.mutationResolver = {
  createAbstract: async (_, args, { req }) => {
    try {
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
      return err;
    }
  },
  updateAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthorized access. Please login.');
      const getAbstract = await Abstract.findById(args.updateAbstractInput._id);
      if (!getAbstract) {
        throw new Error("We don't have such abstract. Please check again.");
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
      return err;
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
      return err;
    }
  },
};
