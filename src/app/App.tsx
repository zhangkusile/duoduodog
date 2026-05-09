import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  Bone,
  Star,
  Smile,
  ChevronDown,
  Camera,
  Coffee,
  Sparkles,
} from "lucide-react";
import coverImage from "@/assets/fcbfbcf6dd4e0d5807423837cb3e9d57.jpg";
import MusicPlayer from "./components/MusicPlayer";

const COVER_IMG = coverImage;
import duoduoImage from "@/assets/2e9f66c4591b0077a62ae72f54127790.jpg";
const DUODUO_IMG = duoduoImage;

import g01 from "@/assets/03fb749efbaaf643695c62eaa1ef4cb9.jpg";
import g02 from "@/assets/0521d8a8da5e6f18876686cc0e89e8ae.jpg";
import g03 from "@/assets/0a39664d5616003b2f6c0b31d5ea7fcd.jpg";
import g04 from "@/assets/1c6d1c3bccdf8392876c26291b59c3c9.jpg";
import g05 from "@/assets/272adbb789a26b88c5bf4b91da74128a.jpg";
import g06 from "@/assets/4f5b7a7646b2a8a411ae1ab2db70929c.jpg";
import g07 from "@/assets/5127a8869846e74e3273d2cddb81f475.jpg";
import g08 from "@/assets/54fc680cf759533af0fc9012a0c96046.jpg";
import g09 from "@/assets/5dd42b941918917e895cfe3f3193a14b.jpg";
import g10 from "@/assets/624a4ef7dea5aa7dc1431770e4282847.jpg";
import g11 from "@/assets/6287a11c9b8638e0e0cb7be1e2203388.jpg";
import g12 from "@/assets/65ef3dd2880e81520829c1935b9e1073.jpg";
import g13 from "@/assets/7ecff6a1a13a888af0c22952a1e02e5f.jpg";
import g14 from "@/assets/7ff473addce481a57b7d518bdf75e4dc.jpg";
import g15 from "@/assets/925e1e2a50fe9b79100a8c1d3f54fb44.jpg";
import g16 from "@/assets/93bed08576aca0ea1df094fb4ccb31a0.jpg";
import g17 from "@/assets/a02fff4df3f4508e8e06654b72a630cc.jpg";
import g18 from "@/assets/b49e969fdc1550cccae6810d7d574ca5.jpg";
import g19 from "@/assets/b5cb703ca8662679f41c869c7ad5c989.jpg";
import g20 from "@/assets/b8b6839e1253ee691673dca77fd8dba3.jpg";
import g21 from "@/assets/bee43bc6e764a43cf193506f08f336f1.jpg";
import g22 from "@/assets/c2ede87ed98df0c64632c345e16a58c8.jpg";
import g23 from "@/assets/f935a6729ca4be4d336942bd32da6728.jpg";

const GALLERY_PHOTOS: string[] = [
  g01, g02, g03, g04, g05, g06, g07, g08,
  g09, g10, g11, g12, g13, g14, g15, g16,
  g17, g18, g19, g20, g21, g22, g23,
];

function Hero() {
  const scrollToPets = () => {
    document
      .getElementById("pets-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        <img
          src={COVER_IMG}
          alt="Tangyuan and Rich"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-10 right-4 left-4 md:left-auto md:right-10 z-10 max-w-sm"
      >
        <div className="text-left drop-shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <span className="text-white/90">欢迎成为</span> <br />
            <span className="text-amber-300 inline-block transform hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
              多多
            </span>{" "}
            <br />
            <span className="text-white/90">的好朋友！</span>
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-6 font-medium drop-shadow-md max-w-[280px]">
            一只超级可爱的边牧小公主，用萌化你的心。
          </p>

          <div className="flex items-center">
            <motion.button
              onClick={scrollToPets}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-900 px-5 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-stone-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>认识多多</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-10 z-10 text-white/60 cursor-pointer hover:text-white transition-colors hidden md:block"
        onClick={scrollToPets}
      >
        <ChevronDown className="w-10 h-10 drop-shadow-lg" />
      </motion.div>
    </section>
  );
}

function PetProfile({
  name,
  title,
  breed,
  image,
  theme,
  icon: Icon,
  traits,
  likes,
  story,
  reversed,
}: {
  name: string;
  title: string;
  breed: string;
  image: string;
  theme: "orange" | "blue";
  icon: React.ElementType;
  traits: string[];
  likes: string[];
  story: string;
  reversed?: boolean;
}) {
  const themeColors = {
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
      tagBg: "bg-orange-200",
      tagText: "text-orange-800",
      shadow: "shadow-orange-200/50",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      tagBg: "bg-blue-200",
      tagText: "text-blue-800",
      shadow: "shadow-blue-200/50",
    },
  }[theme];

  return (
    <div
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 py-10 md:py-16`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <div
          className={`relative rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 ${themeColors.bg} ${themeColors.shadow} shadow-2xl transform rotate-${reversed ? "2" : "-2"} hover:rotate-0 transition-all duration-500`}
        >
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-3 md:p-4 rounded-full shadow-lg z-10">
            <Icon className={`w-6 h-6 md:w-8 md:h-8 ${themeColors.text}`} />
          </div>
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[2.5rem]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div>
          <h3
            className={`text-xl font-bold ${themeColors.text} mb-2 tracking-wider uppercase`}
          >
            {breed}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-800 mb-2 font-serif">
            {name}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-500 font-medium italic">
            "{title}"
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="flex items-center text-lg font-bold text-stone-700 mb-3">
              <Sparkles className="w-5 h-5 mr-2 text-stone-400" />{" "}
              性格标签
            </h4>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full font-semibold text-sm ${themeColors.tagBg} ${themeColors.tagText}`}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center text-lg font-bold text-stone-700 mb-3">
              <Heart className="w-5 h-5 mr-2 text-red-400" />{" "}
              最爱的事物
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {likes.map((like, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100 shadow-sm"
                >
                  <Star
                    className={`w-4 h-4 mr-2 ${themeColors.text}`}
                  />
                  <span className="font-medium">{like}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-2 h-full ${themeColors.bg}`}
          ></div>
          <h4 className="font-bold text-stone-800 mb-2 flex items-center">
            <Smile className="w-5 h-5 mr-2 text-yellow-500" />{" "}
            有趣的小秘密
          </h4>
          <p className="text-stone-600 leading-relaxed">
            {story}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function FunFacts() {
  const stories = [
    {
      title: "出门就是最开心的事",
      content:
        "多多最喜欢和爸爸妈妈一起出门冒险，不管是公园、海边还是山里，只要能出去玩，尾巴就摇得像螺旋桨一样停不下来！",
      icon: Coffee,
    },
    {
      title: "减脂餐大作战",
      content:
        "姥姥姥爷总是担心多多吃太多，精心准备减脂餐。但多多每次都用水汪汪的大眼睛看着，试图偷偷多吃一口肉肉零食。",
      icon: Bone,
    },
    {
      title: "撒娇小能手",
      content:
        "别看多多是聪明的边牧，在家里完全是个撒娇小公主。最擅长的技能就是用无辜脸骗零食，成功率高达百分之百！",
      icon: Camera,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800 mb-4 font-serif">
            治愈瞬间
          </h2>
          <p className="text-base md:text-xl text-stone-500 max-w-2xl mx-auto">
            多多的快乐日常，每一天都是温馨可爱的小故事。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <story.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4">
                {story.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                {story.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoGallery() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800 mb-4 font-serif">
            照片墙
          </h2>
          <p className="text-base md:text-xl text-stone-500 max-w-2xl mx-auto">
            记录每一个可爱的瞬间
          </p>
          <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {GALLERY_PHOTOS.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 8) * 0.05, duration: 0.4 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [wink, setWink] = React.useState<"none" | "cat" | "dog">("none");

  const handleHeartClick = () => {
    setWink((prev) => (prev === "none" || prev === "dog" ? "cat" : "dog"));
    setTimeout(() => setWink("none"), 2000);
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-10 md:py-12 text-center px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-4 mb-8 relative">
          <motion.button
            onClick={handleHeartClick}
            whileTap={{ scale: 1.4 }}
            className="relative cursor-pointer"
          >
            <Heart className="w-8 h-8 text-red-500 animate-pulse" />
          </motion.button>

          {wink !== "none" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: -40, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            >
              <span className="text-4xl">
                {wink === "cat" ? "😺" : "🐶"}
              </span>
            </motion.div>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-serif">
          很高兴认识你！
        </h2>
        <p className="mb-6 md:mb-8 text-base md:text-lg">
          感谢你成为多多的互联网好朋友。
          <br />
          希望多多的日常能为你带来一点点温暖和笑容。
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center justify-center sm:space-x-2 bg-stone-800 px-5 md:px-6 py-3 rounded-full text-xs sm:text-sm font-medium border border-stone-700">
          <span>
            © {new Date().getFullYear()} 多多的小宇宙
          </span>
          <span className="hidden sm:inline mx-2">|</span>
          <span>Made with love</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
      <MusicPlayer />
      <Hero />

      <section
        id="pets-section"
        className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800 mb-4 font-serif">
            认识小主角
          </h2>
          <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full"></div>
        </div>

        <PetProfile
          name="多多"
          title="全世界最可爱的边牧妹妹！"
          breed="边境牧羊犬"
          image={DUODUO_IMG}
          theme="orange"
          icon={Bone}
          traits={[
            "萌妹一枚",
            "超级可爱",
            "撒娇达人",
            "小公主",
          ]}
          likes={[
            "和爸爸妈妈出去玩",
            "各种肉肉零食",
            "姥姥姥爷的减脂餐",
            "被全家人宠爱",
          ]}
          story="多多是家里的团宠小公主，最喜欢跟着爸爸妈妈到处探险。虽然姥姥姥爷总是给她做减脂餐，但她最爱的还是各种肉肉零食，每次都用无辜的大眼睛成功骗到更多好吃的。"
        />
      </section>

      <FunFacts />

      <PhotoGallery />

      <Footer />
    </div>
  );
}