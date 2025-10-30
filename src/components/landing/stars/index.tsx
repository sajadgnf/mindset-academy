import { Users, BookOpen, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "+20",
    label: "دانشجو",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    value: "3",
    label: "کارگاه",
    color: "text-accent",
  },
  {
    icon: Award,
    value: "95%",
    label: "رضایت",
    color: "text-chart-3",
  },
  {
    icon: TrendingUp,
    value: "+20",
    label: "ساعت آموزش",
    color: "text-chart-4",
  },
]

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div
                    className={`w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center ${stat.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="font-bold text-3xl lg:text-4xl">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
