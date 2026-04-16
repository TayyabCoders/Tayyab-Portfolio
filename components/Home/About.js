import Image from "next/image";



export default function About() {
  return (
    <main className="w-full" id="About">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Meet Rasil
            </h2> */}
            <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[4rem] mb-8">
              Meet Tayyab
            </h3>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-black leading-relaxed">
              I’m Tayyab Faisal, a Full-Stack Engineer specializing in scalable backend systems and AI-driven applications. I build production-grade solutions using Node.js, TypeScript, Fastify/FastAPI, React, Next.js, PostgreSQL, and Redis. My work focuses on designing multi-tenant SaaS architectures, event-driven systems, and real-time applications using tools like RabbitMQ and Socket.IO. I have hands-on experience developing AI-powered systems including RAG pipelines and computer vision applications. I follow clean architecture principles and write maintainable, well-documented code. I’m comfortable taking full ownership—from system design to deployment using Docker and cloud platforms. I aim to build systems that are engineered to scale, not just to demo.
            </p>

            <div className="mt-8 h-px w-full bg-black/10" />

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                SaaS Development
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                Full-Stack Architecture
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                AI Solutions
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                AI Agents & Automation
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                Scalable Systems
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                Backend Engineering
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black">
                Startup MVPs
              </span>
            </div>


            <div className="mt-8 h-px w-full bg-black/10" />

            <div className="mt-6 xl:hidden 2xl:block">
              <div className="grid grid-cols-3 gap-8 text-[11px] sm:text-xs text-black/50">
                <div>Scale</div>
                <div className="text-center">Impact</div>
                <div className="text-right">Performance</div>
              </div>

              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-3 gap-8 items-start text-xs sm:text-sm leading-relaxed">
                  <div className="text-black">
                    High-Traffic <br /> Production Systems
                  </div>
                  <div className="text-center text-black">
                    Infrastructure Costs ↓ 35%
                  </div>
                  <div className="text-right text-black">
                    API Performance ↑ 45%
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 items-start text-xs sm:text-sm leading-relaxed">
                  <div className="text-black">
                    Platforms Scaled <br /> 5x Growth
                  </div>
                  <div className="text-center text-black">
                    Server Load ↓ 40%
                  </div>
                  <div className="text-right text-black">
                    System Efficiency ↑ 50%
                  </div>
                </div>
              </div>
            </div>




          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[4/3] sm:aspect-square">
                <Image
                  src="/images/tayyab1.jpeg"
                  alt="Rasil Abro"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover  "
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
