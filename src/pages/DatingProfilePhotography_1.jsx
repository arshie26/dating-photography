import React, { useState } from "react";
import cover from '../assets/cover5.png'
import './DatingProfilePhotography.css'
import david from '../assets/david1.jpg'
import kevin1 from '../assets/kevin1.jpg'
import kevin2 from '../assets/kevin2.jpg'
import justin1 from '../assets/justin1.jpg'
import randy1 from '../assets/randy1.jpg'
import mtc1 from '../assets/mtc1.jpg'
import mtc2 from '../assets/mtc2.jpg'
import mtc3 from '../assets/mtc3.jpg'
import mtc4 from '../assets/mtc4.jpg'
import mtc5 from '../assets/mtc5.jpg'

import {
  Camera,
  MapPin,
  Sparkles,
  Clock,
  ArrowRight,
  Mail,
  Check,
} from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');`;
const TESTIMONIAL_FONT = `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')`;

// Auto-generated base64 portfolio image data
const PORTFOLIO_IMAGES = {
  robyn_kevin_1: kevin1,
  robyn_kevin_2: kevin2,
  final_3805: david,
  final_4304: justin1,
  portfolio_christina_randy: randy1,
  master_9873: mtc1,
  master_9876: mtc2,
  master_9883: mtc3,
  master_9919: mtc4,
  master_9921: mtc5,
};


const PORTFOLIO_ORDER = [
  "master_9873",
  "robyn_kevin_1",
  "final_3805",
  "master_9919",
  "robyn_kevin_2",
  "final_4304",
  "master_9876",
  "portfolio_christina_randy",
  "master_9921",
  "master_9883",
];

const FAQS = [
  {
    q: "I've never done a photoshoot like this. Is that a problem?",
    a: "Not at all — most of my clients haven't either. That's actually where I do my best work: getting someone comfortable enough in front of the camera that they stop performing and just look like themselves.",
  },
  {
    q: "How many photos do I actually get?",
    a: "You'll get a full edited digital gallery from the session — enough variety across looks and locations to rebuild your entire profile, not just swap out one photo.",
  },
  {
    q: "Do I need to bring multiple outfits?",
    a: "Yes — I'll send you a short prep guide beforehand covering what to bring, what tends to photograph well, and a few things to avoid, so you show up ready.",
  },
  {
    q: "What if I'm not sure how to pose?",
    a: "That's my job. I direct you through the session with small, specific prompts rather than stiff \"say cheese\" posing — the goal is candid-looking, not catalog-looking.",
  },
  {
    q: "How soon do I get my photos?",
    a: "Turnaround time is confirmed at booking, and you'll get a mix of quick previews and your full edited gallery.",
  },
];

function SectionLabel({ children }) {
  return (
    <p
      className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
      style={{ color: "#8a5a3f" }}
    >
      {children}
    </p>
  );
}

export default function DatingProfilePhotography() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAF3E8", color: "#2B211B" }}>
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <div className="w-full" style={{ background: "#4A3428" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span
            className="text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF3E8" }}
          >
            Arsh Agarwal <span className="opacity-60">Photography</span>
          </span>
          <a
            href="#book"
            className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "#B5654A", color: "#FAF3E8" }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="sw-full h-[115vh] min-h-[420px] relative overflow-hidden">
          <img
            src={cover}
            alt="Portfolio collage"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(30,20,15,0.5) 0%, rgba(30,20,15,0.55) 100%)" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#F0D9B5" }}
            >
              Maryland Dating Profile Photography
            </p>
            <h1
              className="text-4xl sm:text-6xl leading-tight mb-5 max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#FAF3E8", marginBottom: "50px" }}
            >
              Welcome to my world of {" "}
              <span style={{ fontStyle: "italic" }}>confident first impressions</span>.
            </h1>
            <p className="text-base sm:text-lg max-w-xl mb-8" style={{ color: "#EDE0CC", marginBottom: "50px" }}>
              I'm Arsh Agarwal, a Maryland photographer with an unapologetic passion for
              catching people exactly as they are — no performance, no filter, just the version
              of you that<br></br> <span style={{ fontWeight: "bold", fontStyle: "italic", fontSize: "22px" }}>makes someone stop swiping.</span>
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
              style={{ background: "#B5654A", color: "#FAF3E8" }}
            >
              Let's Meet <ArrowRight size={16} />
            </a>
            <div
              className="hero__testimonial mt-8 rounded-xl px-6 py-4"
              style={{ background: "rgba(30,20,15,0.35)", backdropFilter: "blur(2px)" }}
            >
              <p className="hero__testimonial--summary" style={{ color: "#F0D9B5", opacity: 0.9, fontWeight: "bold", marginBottom: "40px", fontFamily: "'Playfair Display', serif" }}>
                "Your specific direction really helped me to nail the poses and have fun in front of the camera."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="w-full" style={{ background: "#3C2A20" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-6 text-center">
          {[
            { icon: <MapPin size={18} />, label: "On-Location Sessions" },
            { icon: <Camera size={18} />, label: "Full Edited Gallery" },
            { icon: <Sparkles size={18} />, label: "Posing Direction Included" },
            { icon: <Clock size={18} />, label: "Fast Turnaround" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div style={{ color: "#D89A6C" }}>{item.icon}</div>
              <p className="text-xs uppercase tracking-wide" style={{ color: "#EDE0CC" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINT */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2
          className="text-3xl sm:text-4xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          Show up as exactly who you are.
        </h2>
        <p className="text-base opacity-80 leading-relaxed">
          Most of what's sitting in your camera roll right now was never meant to introduce
          you to anyone. It was a friend's phone at a bar, a crop out of someone else's photo,
          bad light at the wrong angle. I want to give you something different — real images,
          taken with intention, that capture the you worth swiping right on.
        </p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Real moments, not stock poses.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PORTFOLIO_ORDER.map((key, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={PORTFOLIO_IMAGES[key]}
                  alt="Portfolio portrait"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="w-full py-16" style={{ background: "#EDE0CC" }}>
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>The Experience</SectionLabel>
          <h2
            className="text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            What you walk away with
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Multiple locations, one session",
                copy: "We move through a few different settings so your gallery doesn't look like one single backdrop repeated ten times.",
              },
              {
                title: "Real direction, not stiff posing",
                copy: "Small, specific prompts that get you moving and talking, so the candid shots actually look candid.",
              },
              {
                title: "A full edited gallery",
                copy: "Enough variety across outfits and settings to rebuild your whole profile, not just replace one photo.",
              },
              {
                title: "A pre-session prep guide",
                copy: "What to wear, what to bring, and a few simple things to avoid — sent before your session, not figured out on the day.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: "#FAF3E8", border: "1px solid rgba(74,52,40,0.15)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#B5654A", color: "#FAF3E8" }}
                >
                  <Check size={15} />
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            className="text-2xl sm:text-3xl text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            What it's actually like working with me
          </h2>
          <p className="text-md  text-center mb-10">
            These are pulled from wedding and portrait sessions
          </p>
          <div className=" gap-4">
            {[{summary: "Your specific direction really helped me nail the poses and have fun with the camera.", 
              full: "You were very aware and attentive. You were giving us new poses and suggestions to improve the pose, and you were very vocal. I'm a visual, hands on learner, and your specific direction really helped me to nail the poses and have fun in front of the camera.",
              client: "COREEN AND MIKE"},
              {summary: "We loved your positive/friendly attitude and could tell you're really passionate about what you do.",
              full: "You were my favorite person to work with! We loved your positive/friendly attitude and could tell you're really passionate about what you do",
              client: "CHRISTINA AND RANDY"},
              {summary: "With your pictures, you can see and feel the emotions as opposed to other photographers who tell you that you had to be there to feel the emotion.",
              full: "With your pictures, you can see and feel the emotions as opposed to other photographers who tell you that you had to be there to feel the emotion. You know exactly where the lighting is, so when you see the lighting, you know exactly how to position it so the light isn't overtaking the picture but it's adding enough contrast to the picture to make it pop.",
              client: "ARIANNA AND LAWRENCE"}
            ].map((quote, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center flex items-center"
                style={{ background: "#3C2A20", color: "#FAF3E8", minHeight: "160px", marginBottom: "20px", justifyContent: "center", flexDirection: "column" }}
              >
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "20px", marginBottom: "40px" }}
                >
                  "{quote.summary}"
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  "{quote.full}"
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  {quote.client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET YOUR PHOTOGRAPHER */}
      <section className="px-6 pb-16">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-10"
          style={{ background: "#B5654A", color: "#FAF3E8" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div
              className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden"
              style={{ border: "3px solid #FAF3E8" }}
            >
              <img
                src={PORTFOLIO_IMAGES.final_3805}
                alt="Arsh Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2
                className="text-2xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Meet Your Photographer
              </h2>
              <p className="text-sm opacity-95 leading-relaxed mb-3">
                I've spent the last several years photographing couples on their wedding and
                engagement days — learning what actually makes someone look and feel like
                themselves in front of a camera, not just a version of themselves performing
                for it.
              </p>
              <p className="text-sm opacity-95 leading-relaxed">
                Dating profile photography uses that same skill in a different setting: get you
                comfortable, get you moving, and capture who you are when you stop thinking
                about the camera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="w-full py-16" style={{ background: "#3C2A20" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#FAF3E8" }}
          >
            I'm not big on "say cheese."
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "#EDE0CC", opacity: 0.85 }}>
            My direction is specific, not generic — think "turn toward the light and laugh at
            nothing," not "smile." One client told me my direction helped her nail the poses and
            actually have fun with the camera. That's the bar for every session.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#EDE0CC", opacity: 0.85 }}>
            I started as the guy at family gatherings who never put the camera down — a
            hand-me-down Pentax, then years of trial and error until I actually understood what
            made a photo work. Off camera, I'm the guy debating Harry Potter theories or pushing
            a copy of Crucial Conversations on you; I left a stable desk job for this because
            I've never been afraid of a little risk. That's the energy I bring to your session.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL SCATTER 1 */}
      <section className="px-6 py-10" style={{ background: "rgb(181, 101, 74)" }}>
        <div className="max-w-md mx-auto text-center">
          <h2
            className="text-2xl sm:text-2xl mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#FAF3E8" }}
          >
            "The location you suggested was awesome. I'm very excited with how the pictures turned out.""
          </h2>
          <p className="text-lg italic" style={{ color: "#F0D9B5", opacity: 0.9 }}>
            "You captured everything that we wanted. It's just the attention to detail. The location you suggested was awesome. The day was enjoyable, it wasn't stressful, and I'm very excited with how the pictures turned out. I was self-conscious earlier, and I look good."
          </p>
          <p className="text-lg mt-1" style={{ color: "#F0D9B5" }}>
            — ANTOINE AND TRAVIS
          </p>
        </div>
      </section>

      {/* PACKAGES / BOOKING FORM */}
      <section id="book" className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <SectionLabel>Book a Session</SectionLabel>
          <h2
            className="text-2xl sm:text-3xl text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Let's get you photos that actually work.
          </h2>
          <p className="text-sm opacity-70 text-center mb-10">
            Tell me a bit about you below and I'll follow up to confirm details, pricing, and
            availability.
            <br />
            <span className="opacity-60">[Pricing and package tiers to be confirmed before this goes live]</span>
          </p>

          <div
            className="rounded-2xl p-6 sm:p-8 space-y-4"
            style={{ background: "#FFFFFF", border: "1px solid rgba(74,52,40,0.15)" }}
          >
            {[
              { label: "Full name *", type: "text" },
              { label: "Phone number *", type: "text" },
              { label: "Email *", type: "text" },
              { label: "What's your Instagram handle?", type: "text" },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  {field.label}
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full mt-1 rounded-md px-3 py-2 text-sm"
                  style={{ border: "1px solid rgba(74,52,40,0.25)", background: "#FAF3E8" }}
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide opacity-70">
                What are you hoping these photos help with?
              </label>
              <textarea
                disabled
                rows={3}
                className="w-full mt-1 rounded-md px-3 py-2 text-sm"
                style={{ border: "1px solid rgba(74,52,40,0.25)", background: "#FAF3E8" }}
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full px-7 py-3 text-sm font-semibold mt-2"
              style={{ background: "#B5654A", color: "#FAF3E8" }}
            >
              Submit &amp; Check Availability
            </button>
            <p className="text-xs opacity-50 text-center">
              This form is a visual placeholder — connect it to your booking backend (e.g.
              Dubsado, GoHighLevel, or a Zapier-fed form) before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SCATTER 2 */}
      <section className="px-6 py-10">
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl sm:text-2xl text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
          "I really liked the fact that we had a voice, and I feel like that added lots of us to the photos. You morphed the images to fit us."
          </h2>
          <p className="text-lg italic" style={{ color: "#4A3428"}}>
            "You're getting different perspectives that can tell different stories. You got to catch the...emotions in pictures which I find gorgeous and wonderful and I don't think I've seen that in many photos before. I really liked the fact that we had a voice, and I feel like that added lots of us to the photos. You morphed the images to fit us."
          </p>
          <p className="text-lg mt-1" style={{ color: "#4A3428" }}>
            — HANNAH AND CHRISTIAN
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Questions? Answered.
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid rgba(74,52,40,0.15)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold"
                >
                  {f.q}
                  <span
                    className="text-lg transition-transform"
                    style={{
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      color: "#B5654A",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm opacity-75 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SCATTER 3 */}
      <section className="px-6 pb-16">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm italic" style={{ color: "#4A3428", opacity: 0.85 }}>
            "[Add a testimonial quote here]"
          </p>
          <p className="text-xs mt-1" style={{ color: "#4A3428", opacity: 0.6 }}>
            — [Client Name]
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8" style={{ background: "#2B211B", color: "#FAF3E8" }}>
        <div className="max-w-4xl mx-auto text-center text-xs opacity-60">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", opacity: 0.9, marginBottom: "10px" }}
          >
            Arsh Agarwal Photography
          </p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <Mail size={16} />
          </div>
          <p>arshtist@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
