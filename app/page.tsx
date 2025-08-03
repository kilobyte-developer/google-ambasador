"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Zap,
  Rocket,
  Brain,
  Hammer,
  Users,
  Megaphone,
  Sparkles,
  Star,
  ArrowDown,
  CircuitBoardIcon as Circuit,
  Cpu,
  Database,
} from "lucide-react"

export default function Component() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const glowAnimation = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 40px rgba(147, 51, 234, 0.7)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Tech Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-blue-400 opacity-30"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          <Circuit size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-purple-400 opacity-30"
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          <Cpu size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-cyan-400 opacity-30"
          animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        >
          <Database size={45} />
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight"
              {...glowAnimation}
            >
              ATHARVA
            </motion.h1>
            <motion.div className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300" {...floatingAnimation}>
              🎤 Why I Deserve to be a Google Student Ambassador
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="backdrop-blur-xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-3xl p-8 md:p-12 border border-cyan-500/30 mb-8 shadow-2xl shadow-blue-500/20"
          >
            <div className="text-xl md:text-2xl leading-relaxed space-y-4">
              <p className="font-semibold text-cyan-300">Hey Google! 👋</p>
              <p>
                I'm Atharva – the guy who runs on <Coffee className="inline w-6 h-6 text-amber-400" /> + curiosity +
                chaos (in that order).
              </p>
              <p>
                From coordinating an entire{" "}
                <span className="text-purple-400 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  National Conference as Senior Coordinator
                </span>{" "}
                🏆,
              </p>
              <p>to hacking my way through problems like Iron Man in a dorm room 🛠️ –</p>
              <p className="text-green-400 font-bold">I thrive where tech meets community.</p>
              <p>
                I don't just want to be an ambassador, I want to be{" "}
                <Rocket className="inline w-6 h-6 text-orange-500" /> the person who lights up the campus with
                innovation, memes, and impact.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-cyan-400" />
          </motion.div>
        </div>
      </section>

      {/* Vibe Board Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          >
            My Vibe Board
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "🧠 Innovator",
                description: 'Turning "what if" into "heck yes, let\'s build it!"',
                color: "from-blue-500 to-cyan-500",
                borderColor: "border-blue-500/50",
              },
              {
                icon: <Hammer className="w-12 h-12" />,
                title: "🏗 Builder",
                description: "Websites, hackathon wins, and soon… blockchains.",
                color: "from-orange-500 to-red-500",
                borderColor: "border-orange-500/50",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "🤝 Connector",
                description: "Senior Coordinator of a national event = managing chaos, leading teams & still vibing.",
                color: "from-green-500 to-emerald-500",
                borderColor: "border-green-500/50",
              },
              {
                icon: <Megaphone className="w-12 h-12" />,
                title: "📢 Hype Person",
                description: "I don't just learn – I make others want to learn.",
                color: "from-purple-500 to-pink-500",
                borderColor: "border-purple-500/50",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl ${item.borderColor} hover:border-opacity-80 transition-all duration-300 group hover:scale-105 shadow-xl hover:shadow-2xl`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meme Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-black mb-12 text-cyan-400">
            If I were a Meme as an Ambassador
          </motion.h2>

          <motion.div
            {...fadeInUp}
            className="backdrop-blur-xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-3xl p-8 md:p-12 border border-purple-500/30 mb-8 shadow-2xl shadow-purple-500/20"
          >
            <div className="text-2xl md:text-3xl space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Badge
                  variant="secondary"
                  className="text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 border-blue-500/50"
                >
                  Google:
                </Badge>
                <span>"Can you spread tech awareness?"</span>
              </div>
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ⬇️
              </motion.div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Badge
                  variant="secondary"
                  className="text-lg px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500/50"
                >
                  Me:
                </Badge>
                <span>"Say less, I'll spread it faster than a college gossip thread" 😎🔥</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dream Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            🔥 My Dream as an Ambassador
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              "Make workshops feel like after-movie montages 🎬",
              "Create a techie safe-space where ideas > ego",
              "Use memes, reels & chaos energy to bring people closer to tech 🌀",
            ].map((dream, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="backdrop-blur-xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <p className="text-xl md:text-2xl font-medium">{dream}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TLDR Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-black mb-12 text-orange-400">
            TLDR (for the busy Googlers)
          </motion.h2>

          <motion.div
            {...fadeInUp}
            className="backdrop-blur-xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-3xl p-8 md:p-12 border border-orange-500/30 mb-12 shadow-2xl shadow-orange-500/20"
          >
            <div className="text-xl md:text-2xl leading-relaxed space-y-4">
              <p>I'm not applying to "become an ambassador".</p>
              <p className="text-cyan-300 font-bold text-2xl md:text-3xl">
                I'm applying to be the spark <Zap className="inline w-8 h-8 text-cyan-400" /> that makes my campus go –
              </p>
              <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                "Damn, that's where the magic happens!"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl font-bold">
              Choose Atharva – your next favorite chaos-fueled innovator. 🚀
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-xl px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 shadow-2xl shadow-purple-500/30 font-bold"
              >
                <Star className="w-6 h-6 mr-2" />
                Let's Make Magic Happen!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
