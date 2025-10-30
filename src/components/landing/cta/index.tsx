import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/background.webp"
          alt="Mathematical background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-purple-900/20 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <Card className="border-4 border-transparent bg-linear-to-br from-purple-600 to-blue-600 p-1 shadow-2xl shadow-purple-500/30">
          <div className="bg-card rounded-[calc(var(--radius)-4px)]">
            <CardContent className="p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-right">
                  <h2 className="text-4xl lg:text-6xl font-black text-balance leading-tight">
                    آماده شروع{" "}
                    <span className="bg-linear-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      سفر یادگیری
                    </span>{" "}
                    هستید؟
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    همین حالا در کارگاه‌های ما ثبت‌نام کنید و اولین قدم را برای تبدیل شدن به یک مهندس نرم‌افزار حرفه‌ای
                    بردارید
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                    <Button
                      size="lg"
                      className="text-lg h-14 px-10 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-500/30 font-bold"
                    >
                      ثبت‌نام در کارگاه
                      <ArrowLeft className="mr-2 h-6 w-6" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg h-14 px-10 border-2 font-bold hover:bg-purple-50 bg-transparent"
                    >
                      مشاوره رایگان
                    </Button>
                  </div>
                </div>

                <div
                  className="space-y-6 bg-linear-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-purple-200"
                  id="contact"
                >
                  <h3 className="text-2xl font-bold mb-8">تماس با ما</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 text-foreground group hover:translate-x-2 transition-transform">
                      <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-medium">info@mindsetmakers.academy</span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground group hover:translate-x-2 transition-transform">
                      <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <span dir="ltr" className="text-lg font-medium">
                        +98 912 345 6789
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground group hover:translate-x-2 transition-transform">
                      <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-medium">تهران، خیابان ولیعصر</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        <footer className="mt-16 pt-10 border-t-2 border-border text-center text-muted-foreground text-lg">
          <p>© 2025 Mindset Makers Academy. تمامی حقوق محفوظ است.</p>
        </footer>
      </div>
    </section>
  )
}
