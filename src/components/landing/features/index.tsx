import { Brain, Code2, Users2, Lightbulb, Target, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "یادگیری عمیق",
    description: "تمرکز بر درک مفاهیم به جای حفظ کردن، برای یادگیری پایدار و عمیق",
  },
  {
    icon: Code2,
    title: "پروژه‌محور",
    description: "یادگیری از طریق ساخت پروژه‌های واقعی و کاربردی در دنیای حرفه‌ای",
  },
  {
    icon: Users2,
    title: "کلاس‌های کوچک",
    description: "گروه‌های کوچک برای توجه بیشتر به هر دانشجو و یادگیری بهتر",
  },
  {
    icon: Lightbulb,
    title: "تفکر خلاق",
    description: "پرورش مهارت حل مسئله و تفکر الگوریتمی برای موفقیت در برنامه‌نویسی",
  },
  {
    icon: Target,
    title: "هدفمند",
    description: "مسیر یادگیری شخصی‌سازی شده متناسب با اهداف و سطح هر دانشجو",
  },
  {
    icon: Rocket,
    title: "آماده بازار کار",
    description: "آموزش مهارت‌های مورد نیاز بازار کار و آماده‌سازی برای مصاحبه‌های فنی",
  },
]

export function Features() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-purple-50/30 to-background -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-balance">
            چرا{" "}
            <span className="bg-linear-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">ذهن‌سازان</span>
            ؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رویکرد منحصر به فرد ما در آموزش، تضمین می‌کند که شما نه تنها کد بنویسید، بلکه مهندس نرم‌افزار شوید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-2 border-transparent bg-linear-to-br from-white to-purple-50/50 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 space-y-5">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
