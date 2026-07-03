"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PRICE_EUR } from "@/data/product";

const features = [
  {
    title: "Prévisualisation temps réel",
    desc: "Personnalisez chaque détail et voyez votre cadre prendre vie instantanément.",
  },
  {
    title: "Finition premium",
    desc: "Cadre bois noir, lettrage doré en relief et fond mat. Un objet à exposer.",
  },
  {
    title: "Édition unique",
    desc: "Chaque cadre est fabriqué à la demande, à votre performance, à votre exploit.",
  },
];

const steps = [
  { n: "01", t: "Personnalisez", d: "Temps, nom, pays et classements #OV / #AG." },
  { n: "02", t: "Prévisualisez", d: "Un rendu ultra-réaliste, mis à jour en direct." },
  { n: "03", t: "Commandez", d: "Paiement sécurisé, livraison gratuite chez vous." },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-mist mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Cadres souvenirs pour athlètes
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tightest leading-[0.95]"
            >
              Vos performances,
              <br />
              <span className="gold-text">immortalisées.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg text-mist max-w-md leading-relaxed"
            >
              Un cadre premium personnalisé qui capture votre exploit sportif.
              Solo ou duo. Fabriqué à la demande.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/configurateur"
                className="group px-7 py-3.5 rounded-full bg-pearl text-ink font-medium hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Créer mon cadre
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <div className="text-sm text-mist">
                <span className="text-pearl font-semibold text-lg">
                  {PRICE_EUR.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
                {" · "}Livraison gratuite
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-accent/10 blur-3xl rounded-full" />

            {/* gentle continuous float */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/cadre-hero.jpg"
                alt="Cadre souvenir TrophyFrames personnalisé pour athlètes — modèle Duo"
                width={1000}
                height={1333}
                priority
                className="relative w-full h-auto"
              />

              {/* light reflection sweeping across the glass, in a loop */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center max-w-2xl mx-auto">
              Pensé comme un <span className="gold-text">objet d&apos;exception</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 h-full hover:border-accent/20 transition-colors duration-500">
                  <div className="w-10 h-10 rounded-xl bg-gold-sheen mb-5" />
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-mist leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="px-5 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              t: "Cadre Solo",
              d: "Votre performance individuelle sublimée. Temps, nom, pays et vos classements #OV / #AG.",
              href: "/configurateur?type=solo",
            },
            {
              t: "Cadre Duo",
              d: "Pour les performances en équipe. Deux athlètes, un exploit, un cadre.",
              href: "/configurateur?type=duo",
            },
          ].map((m, i) => (
            <Reveal key={m.t} delay={i * 0.1}>
              <div className="relative overflow-hidden rounded-3xl glass p-10 h-full group">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />
                <span className="text-xs uppercase tracking-widest text-accent">
                  Modèle
                </span>
                <h3 className="text-3xl font-semibold mt-2 mb-3">{m.t}</h3>
                <p className="text-mist leading-relaxed max-w-sm">{m.d}</p>
                <Link
                  href={m.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm text-pearl hover:gap-3 transition-all"
                >
                  Personnaliser →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">
              Trois étapes. Un souvenir éternel.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="text-center">
                  <div className="gold-text text-5xl font-bold mb-4">{s.n}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-mist">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-[32px] glass p-12 sm:p-16">
            <div className="absolute inset-0 bg-accent/5 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Prêt à immortaliser votre exploit ?
              </h2>
              <p className="text-mist mb-8 max-w-md mx-auto">
                Créez votre cadre en quelques minutes. {PRICE_EUR}€ · livraison
                gratuite.
              </p>
              <Link
                href="/configurateur"
                className="inline-block px-8 py-4 rounded-full bg-pearl text-ink font-medium hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Commander mon cadre
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
