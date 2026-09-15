import Boton from "@/components/ui/Boton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="space-y-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">FURGONAPP</h1>

          <p className="mt-2 text-gray-600">Plataforma de transporte escolar</p>
        </div>

        <div className="flex justify-center gap-3">
          <Boton>Buscar furgón</Boton>

          <Boton variante="secundario">Iniciar sesión</Boton>
        </div>
      </div>
    </main>
  );
}
