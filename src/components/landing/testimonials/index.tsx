import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "علی محمدی",
    role: "دانشجوی دوره نگرش مهندسی",
    content: "بهترین تجربه یادگیری که تا به حال داشتم. اساتید با صبر و حوصله تمام مفاهیم را آموزش می‌دهند.",
    avatar: "/male-student-portrait.png",
    rating: 5,
  },
  {
    name: "سارا احمدی",
    role: "دانشجوی کارگاه الگوریتم",
    content: "روش تدریس عالی و پروژه‌های کاربردی باعث شد مفاهیم را به خوبی درک کنم و در بازار کار موفق شوم.",
    avatar: "/diverse-female-student.png",
    rating: 5,
  },
  {
    name: "رضا کریمی",
    role: "دانشجوی پروژه عملی",
    content: "تجربه کار تیمی و ساخت پروژه واقعی، اعتماد به نفس من را برای ورود به بازار کار بالا برد.",
    avatar: "/male-developer-portrait.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            نظرات <span className="text-primary">دانشجویان</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            تجربه دانشجویان ما از یادگیری در Mindset Makers Academy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
