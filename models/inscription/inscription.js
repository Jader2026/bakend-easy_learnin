import mongoose from 'mongoose';
import { ProjectModel } from '../project/project.js';
import { UserModel } from '../user/user.js';


const { Schema, model } = mongoose;

const inscriptionSchema = new Schema({
  
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema, 'Inscripciones');

export { InscriptionModel };
