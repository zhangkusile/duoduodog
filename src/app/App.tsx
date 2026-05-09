import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  Bone,
  Fish,
  Star,
  Smile,
  ChevronDown,
  Camera,
  Coffee,
  Sparkles,
} from "lucide-react";
import MusicPlayer from "./components/MusicPlayer";

// TODO: 添加新的封面图片、宠物头像和照片墙图片到 src/assets/
const COVER_IMG = "";
const TANGYUAN_IMG = "";
const RICH_IMG = "";

const GALLERY_PHOTOS: string[] = [];

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
              汤圆
            </span>
            <span className="text-white/60 mx-1.5">&</span>
            <span className="text-sky-300 inline-block transform hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(125,211,252,0.4)]">
              Rich
            </span>{" "}
            <br />
            <span className="text-white/90">的好朋友！</span>
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-6 font-medium drop-shadow-md max-w-[280px]">
            高贵长毛布偶奶牛猫与聪明活泼边牧的奇妙相遇。
          </p>

          <div className="flex items-center">
            <motion.button
              onClick={scrollToPets}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-900 px-5 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-stone-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>认识我们</span>
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
      title: "跨服聊天的日常",
      content:
        "刚认识的时候，Rich每次想找汤圆玩都会做小狗标准的邀请下趴下，这个动作对于汤圆来说是攻击炸毛的意思，所以汤圆一开始会很生气",
      icon: Coffee,
    },
    {
      title: "交换吃饭（不允许的）",
      content:
        "汤圆和Rich喜欢吃对方的饭，对自己的饭有的时候不感兴趣，会偷偷的想要吃对方的饭....难道跨物种的饭更香吗？",
      icon: Bone,
    },
    {
      title: "暗中观察的保护",
      content:
        "别看汤圆平时很烦Rich，如果Rich不舒服，汤圆总是默默守在Rich不远的高处，他们经常一起在家跑酷！！",
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
            猫狗双全的快乐，都在这些鸡飞狗跳又温馨可爱的日常里。
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
          感谢你成为汤圆和Rich的互联网好朋友。
          <br />
          希望我们的日常能为你带来一点点温暖和笑容。
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center justify-center sm:space-x-2 bg-stone-800 px-5 md:px-6 py-3 rounded-full text-xs sm:text-sm font-medium border border-stone-700">
          <span>
            © {new Date().getFullYear()} 汤圆 & Rich 的小宇宙
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
            认识两位小主角
          </h2>
          <div className="w-24 h-1 bg-orange-300 mx-auto rounded-full"></div>
        </div>

        <PetProfile
          name="汤圆"
          title="暴躁大美女"
          breed="长毛布偶奶牛猫"
          image={TANGYUAN_IMG}
          theme="orange"
          icon={Fish}
          traits={[
            "傲娇公主",
            "隐形话痨",
            "高冷但粘人",
            "作息监督员",
          ]}
          likes={[
            "特级猫条",
            "午后的阳光",
            "所有的快递纸箱",
            "高处俯视",
          ]}
          story="奶牛警长，每天在家跑酷，进行体能练习。如果Rich惹她不高兴了，会精准使出一招无影猫猫拳，然后跳起来暴揍。不喜欢任何别的猫猫。"
        />

        <div className="w-full h-px bg-stone-200 my-10"></div>

        <PetProfile
          name="Rich"
          title="阳光开朗大美女！"
          breed="边境牧羊犬"
          image={RICH_IMG}
          theme="blue"
          icon={Bone}
          traits={[
            "快乐小狗",
            "社牛晚期",
            "精力无限",
            "超级典型ENFP",
          ]}
          likes={["追飞盘", "草地狂奔", "交新朋友", "贴贴汤圆"]}
          story="虽然是狗界智商第一的学霸，但在家里总是被汤圆的智商碾压。最擅长的技能是试图用深情狗狗眼对你进行精神控制，以获取更多的零食。总是想和汤圆贴贴，却总是被无情拒绝，但屡战屡败，屡败屡战。"
          reversed
        />
      </section>

      <FunFacts />

      <PhotoGallery />

      <Footer />
    </div>
  );
}