import mongoose from 'mongoose';
import { UserModel } from '../user/user.js';
import { ProjectModel } from '../project/project.js';

const { Schema, model } = mongoose;

const avanceSchema = new Schema({
  
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
      required: true,
    },
  ],
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const AdvanceModel = model('Avance', avanceSchema, 'Avances');

export { AdvanceModel };
