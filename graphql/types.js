import { gql } from "apollo-server-express";
import { typesEnums } from "../models/enums/typesEnums.js";
import { typesUser } from "../models/user/typesUser.js";
import { typesProject } from "../models/project/typesProject.js";
import { typesAdvance } from "../models/advance/typesAdvance.js";
import { typesInscription } from "../models/inscription/typesInscription.js";
import { typesAuth } from './auth/typesAuth.js';

const typesGlobales = gql`
  scalar Date
`;

export const types = [
  typesGlobales,
  typesEnums,
  typesUser,
  typesProject,
  typesInscription,
  typesAdvance,
  typesAuth,
];
