import { resolversAdvance } from '../models/advance/resolversAdvance.js';
import { resolversUser } from '../models/user/resolversUser.js';
import { resolversProject } from '../models/project/resolversProject.js';
import { resolversInscription } from '../models/inscription/resolversInscription.js';
import { resolversAuth } from './auth/resolverAuth.js';

export const resolvers = [
  resolversAdvance,
  resolversUser,
  resolversProject,
  resolversInscription,
  resolversAuth, 
];
