import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, ArrowLeft } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    title: "دوره نگرش مهندسی نرم‌افزار",
    description: "یادگیری اصول و مفاهیم پایه‌ای برنامه‌نویسی با رویکرد مهندسی",
    image: "/software-engineering-workshop-with-whiteboard.jpg",
    duration: "8 هفته",
    students: "15",
    level: "مقدماتی",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "کارگاه الگوریتم و ساختمان داده",
    description: "تسلط بر الگوریتم‌ها و ساختمان داده‌ها برای حل مسائل پیچیده",
    image: "/algorithm-and-data-structures-teaching.jpg",
    duration: "10 هفته",
    students: "12",
    level: "متوسط",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "پروژه عملی توسعه نرم‌افزار",
    description: "ساخت یک پروژه کامل از صفر تا صد با تیم‌ورک و متدولوژی Agile",
    image: "/team-software-development-project.jpg",
    duration: "12 هفته",
    students: "10",
    level: "پیشرفته",
    color: "bg-chart-3/10 text-chart-3",
  },
]

export function Courses() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="courses">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/background.webp"
          alt="Mathematical formulas background"
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-balance">
            دوره‌ها و{" "}
            <span className="bg-linear-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">
              کارگاه‌های ما
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            از مبتدی تا حرفه‌ای، مسیر یادگیری خود را با ما طی کنید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-border hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 bg-card group"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-purple-100 to-blue-100">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${course.color} shadow-lg`}
                  >
                    {course.level}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-5">
                <h3 className="text-2xl font-bold text-balance">{course.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{course.description}</p>
                <div className="flex items-center gap-6 text-base text-muted-foreground pt-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">{course.students} نفر</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full h-12 text-base font-bold bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500">
                  اطلاعات بیشتر
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
