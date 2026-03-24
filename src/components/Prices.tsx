const prices = [
  {
    name: "Баня «Леший»",
    capacity: "до 10 человек",
    weekday: "2 800 ₽/ч",
    weekend: "3 200 ₽/ч",
    days: "Вт — Пт / Сб — Вс",
  },
  {
    name: "Баня №4",
    capacity: "до 12 человек",
    weekday: "3 000 ₽/ч",
    weekend: "3 300 ₽/ч",
    days: "Будни / Выходные",
  },
  {
    name: "Баня №1 и №2",
    capacity: "до 4 человек",
    weekday: "1 600 ₽/ч",
    weekend: "1 900 ₽/ч",
    days: "Будни / Выходные",
  },
]

export function Prices() {
  return (
    <section id="prices" className="py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость аренды</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Цены</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {prices.map((item) => (
            <div key={item.name} className="border border-border bg-background p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-medium mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.capacity}</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground text-sm">Будни</span>
                  <span className="text-2xl font-medium">{item.weekday}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Выходные</span>
                  <span className="text-2xl font-medium">{item.weekend}</span>
                </div>
              </div>

              <a
                href="tel:+79921829202"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-foreground text-primary-foreground text-sm hover:bg-foreground/80 transition-colors duration-300"
              >
                Записаться
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">Дополнительно</p>
          <div className="flex flex-wrap gap-4">
            <div className="border border-border bg-background px-8 py-6 flex items-center justify-between gap-12">
              <span className="text-lg font-medium">Веник дубовый</span>
              <span className="text-2xl font-medium">400 ₽</span>
            </div>
            <div className="border border-border bg-background px-8 py-6 flex items-center justify-between gap-12">
              <span className="text-lg font-medium">Веник берёзовый</span>
              <span className="text-2xl font-medium">300 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}