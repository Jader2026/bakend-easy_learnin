  import { AdvanceModel } from './advance.js';

const resolversAdvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await AdvanceModel.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = AdvanceModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarAvance: async (parents, args) => {
      const avanceEditado = await AdvanceModel.findOneAndUpdate(
        args._id,
        {
          descripcion: args.descripcion,
          observaciones: args.observaciones
        },
        { new: true }
      );
      return avanceEditado;
    }
  },
};

export { resolversAdvance };
