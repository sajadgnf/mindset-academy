import Image from "next/image";
import { ArrowLeft, Play, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

const HeroContent = async () => {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 lg:px-8 relative z-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        <div className="space-y-8 text-center lg:text-right">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] text-balance">{dict.app_title}</h1>

          <p className="text-xl lg:text-2xl text-purple-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-lg">
            {dict.hero_description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              size="lg"
              className="text-lg h-14 px-10 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl shadow-purple-500/50 border-0 font-bold"
            >
              شروع رایگان
              <ArrowLeft className="mr-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-10 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-bold"
            >
              <Play className="ml-2 h-6 w-6" />
              تماشای ویدیو
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-black text-white">+500</div>
              <div className="text-sm text-purple-200">دانش‌آموز</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-black text-white">+30</div>
              <div className="text-sm text-purple-200">دوره آموزشی</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-sm text-purple-200">رضایت</div>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="relative">
            {/* Main card with 3D tilt effect */}
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 z-10" />
              <Image src="/landing/background.webp" alt="Mathematical formulas" fill className="object-cover" />
            </div>

            {/* Floating achievement cards */}
            <div className="absolute -top-8 -right-8 bg-linear-to-br from-purple-600 to-purple-700 border-2 border-purple-400/50 rounded-2xl p-5 shadow-2xl shadow-purple-500/50 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-black text-3xl text-white">+40%</div>
                  <div className="text-sm text-purple-100">پیشرفت سریع</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-linear-to-br from-blue-600 to-blue-700 border-2 border-blue-400/50 rounded-2xl p-5 shadow-2xl shadow-blue-500/50 animate-float-delayed">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-black text-3xl text-white">24/7</div>
                  <div className="text-sm text-blue-100">پشتیبانی</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
