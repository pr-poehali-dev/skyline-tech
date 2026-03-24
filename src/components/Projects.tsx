import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Парная",
    category: "Финская сауна",
    location: "Кедр · до 6 человек",
    year: "от 2 000 ₽/ч",
    image: "https://cdn.poehali.dev/projects/38fef863-0ec5-41e7-86f6-9085d36307b9/bucket/54523b82-80a8-4e65-8927-17b58367d315.png",
  },
  {
    id: 2,
    title: "Комната отдыха",
    category: "Зона релаксации",
    location: "Деревянный декор · ТВ · диван",
    year: "входит в аренду",
    image: "https://cdn.poehali.dev/projects/38fef863-0ec5-41e7-86f6-9085d36307b9/bucket/fc0648f7-1e6c-4da7-a131-0f6ab7ccbabb.png",
  },
  {
    id: 3,
    title: "Банные принадлежности",
    category: "Дубовый веник · скраб · полотенце",
    location: "Премиум комплект",
    year: "от 500 ₽",
    image: "https://cdn.poehali.dev/projects/38fef863-0ec5-41e7-86f6-9085d36307b9/bucket/c5046d57-7bf4-4f46-9a2b-bba1f11e40cc.png",
  },
  {
    id: 4,
    title: "Баня под ключ",
    category: "Всё включено",
    location: "Парная + отдых + принадлежности",
    year: "от 4 000 ₽/ч",
    image: "https://cdn.poehali.dev/projects/38fef863-0ec5-41e7-86f6-9085d36307b9/bucket/54523b82-80a8-4e65-8927-17b58367d315.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш комплекс</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Фото бани</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}