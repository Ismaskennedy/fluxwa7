export const metadata = {
  title: "Política de Privacidad · SICME",
  description: "Política de privacidad del panel de mensajería de WhatsApp Business de SICME.",
};

const LAST_UPDATED = "2 de julio de 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-xl font-bold text-white">
            W
          </div>
          <h1 className="text-2xl font-bold text-ink-900">Política de Privacidad</h1>
          <p className="mt-1 text-sm text-ink-400">Última actualización: {LAST_UPDATED}</p>
        </div>

        <div className="card space-y-8 p-8 text-sm leading-relaxed text-ink-700">
          <section>
            <p>
              Esta Política de Privacidad describe cómo <strong>SICME</strong> ("nosotros",
              "nuestro") recopila, usa y protege la información de los usuarios que interactúan
              con nuestro panel de mensajería y con nuestro número de WhatsApp Business a través
              de la API oficial de WhatsApp Business de Meta. Al usar nuestros servicios de
              mensajería por WhatsApp, aceptas las prácticas descritas en este documento.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">
              1. Información que recopilamos
            </h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Número de teléfono de WhatsApp con el que nos contactas.</li>
              <li>Nombre de perfil de WhatsApp visible públicamente en tu cuenta.</li>
              <li>Contenido de los mensajes que intercambias con nosotros.</li>
              <li>
                Metadatos de las conversaciones (fecha, hora, estado de entrega/lectura de los
                mensajes).
              </li>
              <li>
                Información que tú mismo nos proporcionas voluntariamente durante la conversación
                (por ejemplo, nombre completo, correo, o datos relacionados con tu consulta).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">2. Cómo usamos tu información</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Responder tus consultas y brindarte atención a través de WhatsApp.</li>
              <li>Enviarte notificaciones, avisos o actualizaciones relacionadas con nuestros servicios, siempre respetando las políticas de mensajería de Meta y, cuando aplica, mediante plantillas de mensaje aprobadas.</li>
              <li>Mejorar la calidad de nuestra atención y la organización interna de conversaciones.</li>
              <li>Cumplir obligaciones legales cuando corresponda.</li>
            </ul>
            <p className="mt-2">
              No vendemos ni compartimos tu información con terceros para fines de publicidad
              ajenos a nuestro negocio. Los datos de tus mensajes se procesan a través de la
              infraestructura de Meta (WhatsApp Cloud API) conforme a sus propias políticas de
              tratamiento de datos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">3. Almacenamiento y seguridad</h2>
            <p>
              La información se almacena en una base de datos con acceso restringido, protegida
              mediante autenticación y control de acceso por roles (administradores y agentes).
              Aplicamos medidas razonables para proteger tus datos contra accesos no autorizados,
              pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">4. Conservación de datos</h2>
            <p>
              Conservamos el historial de conversaciones y datos de contacto mientras exista una
              relación activa contigo o mientras sea necesario para los fines descritos en esta
              política, salvo que la ley exija un periodo distinto.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">5. Tus derechos</h2>
            <p>
              Puedes solicitar en cualquier momento el acceso, corrección o eliminación de tus
              datos personales, así como oponerte al uso de tu información para fines de
              mensajería, escribiéndonos directamente por WhatsApp o al correo de contacto
              indicado abajo. Atenderemos tu solicitud dentro de un plazo razonable.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">6. Terceros involucrados</h2>
            <p>
              Utilizamos la <strong>WhatsApp Business Platform de Meta</strong> como proveedor de
              infraestructura de mensajería. El uso que Meta hace de los datos que procesa a
              través de su plataforma se rige por las propias políticas de privacidad y
              condiciones de WhatsApp Business.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">7. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos
              cualquier cambio en esta misma página junto con la fecha de la última
              actualización.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink-900">8. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos, puedes
              contactarnos a través de nuestro sitio web{" "}
              <a
                href="https://sicme.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                sicme.com.mx
              </a>{" "}
              o directamente por el número de WhatsApp con el que te comunicaste con nosotros.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
