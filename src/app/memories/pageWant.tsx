'use client';
import { motion } from "framer-motion";
import CountdownWidget from "../components/CountdownWidget";
import Timeline from "../components/Timeline";
import Slideshow from "../components/Slideshow";
import PlaylistEmbed from "../components/PlaylistEmbed";
import SecretQuizUnlock from "../components/SecretMessageUnlock";
import EnvelopeAudioGift from "../components/AudioGift";

export default function MemoriesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CountdownWidget />
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Slideshow />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <PlaylistEmbed />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.95 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <SecretQuizUnlock />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, type: "spring", bounce: 0.25 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <EnvelopeAudioGift />
      </motion.div> */}
    </div>
  );
}
