export default function Contact() {
  return (
    <section className="relative bg-black py-24 px-24 text-white">
      <div className="max-w-11/12 mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left — copy */}
        <div className="w-full md:w-2/5 flex flex-col gap-4 text-right">
          <h2
            className="font-melete text-3xl md:text-3xl leading-tight tracking-widest"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            CONSTRUYAMOS EL FUTURO DIGITAL DE TU EMPRESA
          </h2>
          <p className="font-montserrat text-lg text-white/70 leading-relaxed">
            Desarrollamos software, soluciones blockchain e integraciones de
            inteligencia artificial que ayudan a las empresas a crecer,
            optimizar procesos y crear nuevas oportunidades tecnológicas.
          </p>
        </div>

        {/* Right — form card */}
        <div className="w-full md:w-3/5 rounded-2xl border border-primary bg-secondary/30 p-8 flex flex-col gap-6">

          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">NOMBRE</label>
            <input
              type="text"
              placeholder="NOMBRE"
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">EMPRESA</label>
            <input
              type="text"
              placeholder="NOMBRE DE TU EMPRESA"
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Correo + Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs tracking-widest text-primary font-bold">CORREO</label>
              <input
                type="email"
                placeholder="hola@unsitiogenial.es"
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs tracking-widest text-primary font-bold">TELÉFONO</label>
              <input
                type="tel"
                placeholder="000-000-0000"
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
          </div>

          {/* Tipo de servicio */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">TIPO DE SERVICIO</label>
            <input
              type="text"
              placeholder="SERVICIO"
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Proyecto */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">CUÉNTANOS SOBRE TU PROYECTO</label>
            <textarea
              rows={5}
              placeholder="ESCRIBE SOBRE TU PROYECTO"
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button className="w-full rounded-lg bg-primary py-4 font-montserrat text-sm tracking-widest text-secondary font-bold hover:bg-primary/80 transition-colors">
            ENVIAR
          </button>

        </div>
      </div>
    </section>
  );
}
