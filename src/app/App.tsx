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
import coverImage from "@/assets/5f2d797d19bb8adf9ac47b1247b4932f29bc7dd3.png";
import tangyuanImage from "@/assets/tangyuan.jpg";
import richImage from "@/assets/rich.jpg";
import photo01 from "@/assets/331a3069fe28f00f88921a02ab5ee875.jpg";
import photo02 from "@/assets/48c46acd491106e52a57aeedb5cbd9ec.jpg";
import photo03 from "@/assets/c9208f26f0b2a3a8c46b7cbc8979c551.jpg";
import photo04 from "@/assets/ef7d1b36acc442cffcad8f69335f963f.jpg";
import photo05 from "@/assets/f2325b7c82d867f30f168b7cfa4dc304.jpg";
import photo06 from "@/assets/604d56e4d834afc2813def694aae5f3c.jpg";
import photo07 from "@/assets/cdd152643157812a80d676d7ae98bca9.jpg";
import photo08 from "@/assets/d7b1b0ed00a00af6cffcb15325a4d353.jpg";
import photo09 from "@/assets/8871272ee34479df1e7c86acde35a586.jpg";
import photo10 from "@/assets/aded5afddae09daa99ef226c67025be8.jpg";
import photo11 from "@/assets/2606ca93e33ff6e255caa2a1439cb5f1.jpg";
import photo12 from "@/assets/f191a89994bbfacb991ac26a71fd76d8.jpg";
import photo13 from "@/assets/1b96bc772a724e2ec4f8aa8e8c2b1b05.jpg";
import photo14 from "@/assets/b2ead7d3bd10dea7ded999b8e46d1d1e.jpg";
import photo15 from "@/assets/5ee0f223431f959953a83e43dfd8ebb1.jpg";
import photo16 from "@/assets/8d10dffeb2b440c5c779cfc46e3ffdb4.jpg";
import photo17 from "@/assets/06ed7d4269729a7cc9beb2ee5db8e79e.jpg";
import photo18 from "@/assets/53d15f7a1bc02a6a2ba8d5f6b8f68c7a.jpg";
import photo19 from "@/assets/72f93e35715b232197feed8d5d33367c.jpg";
import photo20 from "@/assets/b3abdb66e87f194edd668ed4c1e9bac3.jpg";
import photo21 from "@/assets/553d34f66553a1ed08e4b26fb3f39766.jpg";
import photo22 from "@/assets/4afa3ca850723433f7a5b8050fda8e60.jpg";
import photo23 from "@/assets/b27e3bd45708f38e0cc0899f3783cc95.jpg";
import photo24 from "@/assets/86a9ca0b6684b929aee5b1cfca20e4f0.jpg";
import photo25 from "@/assets/e45330f3e88ba23c2e84a90b3b098389.jpg";
import photo26 from "@/assets/微信图片_20260414112157_186_157.jpg";
import photo27 from "@/assets/微信图片_20260414112414_187_157.jpg";
import photo28 from "@/assets/微信图片_20260414112415_188_157.jpg";
import photo29 from "@/assets/微信图片_20260414112418_189_157.jpg";
import photo30 from "@/assets/微信图片_20260414112423_190_157.jpg";
import photo31 from "@/assets/微信图片_20260414112426_191_157.jpg";
import photo32 from "@/assets/微信图片_20260414112428_192_157.jpg";
import photo33 from "@/assets/微信图片_20260414112429_193_157.jpg";
import photo34 from "@/assets/微信图片_20260414112432_194_157.jpg";
import photo35 from "@/assets/微信图片_20260414112449_195_157.jpg";
import photo36 from "@/assets/微信图片_20260414112451_196_157.jpg";
import photo37 from "@/assets/微信图片_20260414112452_197_157.jpg";
import MusicPlayer from "./components/MusicPlayer";

const TANGYUAN_IMG = tangyuanImage;
const RICH_IMG = richImage;
const COVER_IMG = coverImage;

const GALLERY_PHOTOS = [
  photo03, photo04, photo06, photo02, photo17,
  photo01, photo07, photo25, photo09, photo05,
  photo08, photo21, photo13, photo10, photo23,
  photo14, photo24, photo11, photo15, photo12,
  photo16, photo22, photo19, photo18, photo20,
  photo26, photo27, photo28, photo29, photo30,
  photo31, photo32, photo33, photo34, photo35,
  photo36, photo37,
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