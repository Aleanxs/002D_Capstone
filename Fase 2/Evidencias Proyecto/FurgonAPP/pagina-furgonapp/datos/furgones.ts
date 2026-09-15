export interface Furgon {
  id: number;

  nombreConductor: string;
  telefono: string;
  correo: string;
  experiencia: number;

  zonas: string[];
  precioMensual: number;

  capacidadTotal: number;
  asientosDisponibles: number;

  patente: string;
  marca: string;
  modelo: string;
  anio: number;

  licenciaAprobada: boolean;
  antecedentesAprobados: boolean;
  permisoEscolarAprobado: boolean;
  revisionTecnicaAprobada: boolean;
}

export const furgones: Furgon[] = [
  {
    id: 1,

    nombreConductor: "Juan Pérez",
    telefono: "+56 9 1234 5678",
    correo: "juan.perez@ejemplo.cl",
    experiencia: 8,

    zonas: ["Las Condes", "Vitacura"],
    precioMensual: 85000,

    capacidadTotal: 12,
    asientosDisponibles: 3,

    patente: "ABCD-12",
    marca: "Mercedes-Benz",
    modelo: "Sprinter",
    anio: 2022,

    licenciaAprobada: true,
    antecedentesAprobados: true,
    permisoEscolarAprobado: true,
    revisionTecnicaAprobada: true,
  },

  {
    id: 2,

    nombreConductor: "María González",
    telefono: "+56 9 8765 4321",
    correo: "maria.gonzalez@ejemplo.cl",
    experiencia: 6,

    zonas: ["Providencia", "Ñuñoa"],
    precioMensual: 92000,

    capacidadTotal: 10,
    asientosDisponibles: 1,

    patente: "EFGH-34",
    marca: "Hyundai",
    modelo: "H1",
    anio: 2021,

    licenciaAprobada: true,
    antecedentesAprobados: true,
    permisoEscolarAprobado: true,
    revisionTecnicaAprobada: true,
  },

  {
    id: 3,

    nombreConductor: "Pedro Ramírez",
    telefono: "+56 9 5555 1111",
    correo: "pedro.ramirez@ejemplo.cl",
    experiencia: 10,

    zonas: ["Vitacura", "Lo Barnechea"],
    precioMensual: 78000,

    capacidadTotal: 12,
    asientosDisponibles: 0,

    patente: "IJKL-56",
    marca: "Maxus",
    modelo: "V80",
    anio: 2020,

    licenciaAprobada: true,
    antecedentesAprobados: true,
    permisoEscolarAprobado: true,
    revisionTecnicaAprobada: true,
  },

  {
    id: 4,

    nombreConductor: "Carolina Soto",
    telefono: "+56 9 5555 2222",
    correo: "carolina.soto@ejemplo.cl",
    experiencia: 4,

    zonas: ["Las Condes", "Providencia"],
    precioMensual: 105000,

    capacidadTotal: 14,
    asientosDisponibles: 4,

    patente: "MNOP-78",
    marca: "Peugeot",
    modelo: "Boxer",
    anio: 2023,

    licenciaAprobada: true,
    antecedentesAprobados: false,
    permisoEscolarAprobado: true,
    revisionTecnicaAprobada: true,
  },
];
