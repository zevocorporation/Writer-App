const Abstract = require('../../models/abstract');

exports.queryResolver = {
  getUsersParticularAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthenticated');
      const particularAbstract = await Abstract.findById(args.abstractId);
      if (!particularAbstract) {
        throw new Error('Abstract Not Found!');
      }
      return particularAbstract;
    } catch (err) {
      throw err;
    }
  },

  getUsersAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthenticated');
      const allAbstract = await Abstract.find({ userId: req.userId });
      if (allAbstract[0]) {
        return allAbstract;
      }
      throw new Error('Abstract Not Created Yet!');
    } catch (err) {
      throw err;
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
      throw err;
    }
  },
  editAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthenticated');
      const getAbstract = await Abstract.findById(args.editAbstractInput._id);
      if (!getAbstract) {
        throw new Error('Abstract Not Found!');
      }
      (getAbstract.title = args.editAbstractInput.title),
        (getAbstract.significance = args.editAbstractInput.significance),
        (getAbstract.description = args.editAbstractInput.description),
        (getAbstract.knowledgeGap = args.editAbstractInput.knowledgeGap),
        (getAbstract.researchQuestion =
          args.editAbstractInput.researchQuestion),
        (getAbstract.hypothesis = args.editAbstractInput.hypothesis),
        (getAbstract.majorTrends = args.editAbstractInput.majorTrends),
        (getAbstract.conclusion = args.editAbstractInput.conclusion),
        (getAbstract.abstract = args.editAbstractInput.abstract);
      const editedAbstract = await getAbstract.save();
      return editedAbstract;
    } catch (err) {
      throw err;
    }
  },
  deleteAbstract: async (_, args, { req }) => {
    try {
      if (!req.isAuth) throw new Error('Unauthenticated');
      const abstractToDelete = await Abstract.findByIdAndDelete(
        args.abstractId
      );
      return abstractToDelete;
    } catch (err) {
      throw err;
    }
  },
};
