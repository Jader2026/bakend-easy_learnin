import { gql } from 'apollo-server-express';


const typesUser = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Proyecto]
  }
  type Perfil {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol:Enum_Rol!
    password: String!
    estado: Enum_EstadoUsuario
  }
  input FiltroUsuarios {
    _id: ID
    identificacion: String
    correo: String
    rol: Enum_Rol
    estado: Enum_EstadoUsuario
  }

  type Query {
    Usuarios(filtro: FiltroUsuarios): [Usuario]
    Usuario(_id: String!): Usuario
    Perfil(_id: String!): Perfil
    
  }
  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      password: String!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String
      apellido: String
      identificacion: String
      correo: String
      estado: Enum_EstadoUsuario!
    ): Usuario
    
    editarPerfil(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      password: String!
      estado: Enum_EstadoUsuario
    ): Perfil   

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { typesUser };
