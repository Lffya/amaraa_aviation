"use client";
import { useTheme } from "@/components/theme-provider";
import React from "react";

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen py-12 px-4 sm:px-8 ${
        theme === "dark" ? "bg-[#232323]" : "bg-[#f0efe2]"
      }`}
    >
      <section className="max-w-3xl mx-auto">
        <h1
          className="font-bodoni text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#c6a35d" }}
        >
          Contact Us
        </h1>
       
        {/* Contact Us Form with gold animation */}
        <div className="relative mb-12">
          {/* Gold animated background accent */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[90%] h-40 pointer-events-none z-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbe6]/80 via-[#c6a35d]/20 to-transparent blur-2xl opacity-80 animate-gold-pulse"></div>
            <span className="absolute left-1/4 top-1/3 text-2xl text-[#c6a35d] opacity-70 animate-gold-sparkle">✨</span>
            <span className="absolute right-1/4 top-1/4 text-xl text-[#c6a35d] opacity-60 animate-gold-sparkle2">✨</span>
          </div>
          <form
            className="relative z-10 bg-white dark:bg-[#232323] rounded-2xl shadow-xl p-8 md:p-10 max-w-xl mx-auto flex flex-col gap-6 border border-[#c6a35d]/20"
            autoComplete="off"
            onSubmit={e => { e.preventDefault(); /* handle form logic here */ }}
          >
            <h2 className="font-bodoni text-2xl font-semibold mb-2 text-center tracking-widest uppercase" style={{ color: "#c6a35d" }}>
              Send Us a Message
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname" className="font-montserrat text-[#c6a35d] font-semibold">Full Name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                className="rounded-lg border border-[#c6a35d]/30 px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-[#c6a35d] bg-[#f0efe2] dark:bg-[#18181b] transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="font-montserrat text-[#c6a35d] font-semibold">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                className="rounded-lg border border-[#c6a35d]/30 px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-[#c6a35d] bg-[#f0efe2] dark:bg-[#18181b] transition-all"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-montserrat text-[#c6a35d] font-semibold">Email <span className="text-xs text-[#c6a35d]/70">(optional)</span></label>
              <input
                id="email"
                name="email"
                type="email"
                className="rounded-lg border border-[#c6a35d]/30 px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-[#c6a35d] bg-[#f0efe2] dark:bg-[#18181b] transition-all"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-montserrat text-[#c6a35d] font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="rounded-lg border border-[#c6a35d]/30 px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-[#c6a35d] bg-[#f0efe2] dark:bg-[#18181b] transition-all resize-none"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-[#c6a35d] to-[#fffbe6] text-[#232323] font-bodoni font-bold py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 tracking-widest uppercase relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#fffbe6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </form>
        </div>

        {/* Your Voice Matters */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
          {/* Left: Person speaking in mic image */}
          <div className="flex-shrink-0 flex items-center justify-center order-2 md:order-1">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-[#c6a35d]/30 bg-gradient-to-br from-[#fffbe6]/60 to-[#c6a35d]/10">
              <img
                src="/person-mic.jpg"
                alt="Person speaking in mic"
                className="object-cover w-full h-full"
                style={{ borderRadius: "1rem" }}
              />
              {/* Gold overlay accent */}
              <span className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-[#fffbe6]/10 via-transparent to-[#c6a35d]/10"></span>
              {/* Gold sparkle */}
              <span className="absolute left-6 top-6 text-2xl text-[#c6a35d] opacity-70 animate-gold-sparkle">✨</span>
              <span className="absolute right-6 bottom-6 text-xl text-[#c6a35d] opacity-60 animate-gold-sparkle2">✨</span>
            </div>
          </div>
          {/* Right: Text content */}
          <div className="flex-1 order-1 md:order-2">
            <h2
              className="font-bodoni text-2xl font-semibold mb-2"
              style={{ color: "#c6a35d" }}
            >
              Your Voice Matters
            </h2>
            <p
              className={`font-montserrat mb-8 ${
                theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"
              }`}
            >
              Whether you have a question, a suggestion, or a desire to collaborate, we
              want to hear from you. Your insights and experiences are invaluable to us
              as we strive to create a world where our collective efforts can thrive.
              We are committed to building relationships that matter and creating a
              meaningful dialogue with everyone who touches our organization.
            </p>
          </div>
        </div>

        {/* Get in Touch Cards */}
        <h2
          className="font-bodoni text-2xl font-semibold mb-6"
          style={{ color: "#c6a35d" }}
        >
          Get in Touch
        </h2>
        <div className="relative mb-10">
          {/* Gold animated background accent for cards */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] h-40 rounded-3xl bg-gradient-to-br from-[#fffbe6]/80 via-[#c6a35d]/20 to-transparent blur-2xl opacity-80 animate-gold-pulse"></div>
            {/* Gold glittering sparkles */}
            <span className="absolute left-1/4 top-1/3 text-2xl text-[#c6a35d] opacity-70 animate-gold-sparkle">✨</span>
            <span className="absolute right-1/4 top-1/4 text-xl text-[#c6a35d] opacity-60 animate-gold-sparkle2">✨</span>
            <span className="absolute left-1/3 bottom-2 text-lg text-[#c6a35d] opacity-50 animate-gold-sparkle3">✨</span>
          </div>
          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            {[
              {
                label: "General Inquiries",
                desc: "For general questions about Amaraa Holding, our divisions, or our initiatives, please reach out to us.",
                email: "info@amaraaholding.com",
                icon: "📩",
              },
              {
                label: "Careers",
                desc: "Interested in joining the Amaraa family? Visit our Careers page or send your resume and cover letter.",
                email: "careers@amaraaholding.com",
                icon: "💼",
              },
              {
                label: "Media Inquiries",
                desc: "For press releases, media requests, or partnerships, contact our media relations team.",
                email: "media@amaraaholding.com",
                icon: "📰",
              },
              {
                label: "Feedback & Suggestions",
                desc: "Your thoughts and feedback are crucial to our growth. Please share your suggestions or ideas.",
                email: "feedback@amaraaholding.com",
                icon: "💡",
              },
              {
                label: "Visit Us",
                desc: "We invite you to visit us at our headquarters to learn more about our mission and vision. To schedule a visit or a meeting, please contact us.",
                email: "visit@amaraaholding.com",
                icon: "📍",
                colSpan: true,
              },
            ].map((item, idx) => (
              <div
                key={item.label}
                className={`relative rounded-2xl p-7 border border-[#c6a35d]/30 bg-white/70 dark:bg-[#232323]/70 backdrop-blur-md shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center overflow-hidden ${
                  item.colSpan ? "md:col-span-2" : ""
                }`}
              >
                {/* Glittering gold accent */}
                <span className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#c6a35d]/40 to-transparent animate-gold-card-pulse blur-2xl opacity-60"></span>
                <span className="inline-block text-4xl mb-3 animate-gold-bounce">{item.icon}</span>
                <span className="font-bodoni font-bold text-[#c6a35d] text-lg mb-2 tracking-wide text-center">{item.label}</span>
                <p className="font-montserrat text-sm text-center mb-2 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                  {item.desc}
                </p>
                <a
                  href={`mailto:${item.email}`}
                  className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors text-center"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Social Media Section */}
        <h2
          className="font-bodoni text-2xl font-semibold mb-4"
          style={{ color: "#c6a35d" }}
        >
          Connect with Us on Social Media
        </h2>
        <div className="relative flex flex-wrap gap-8 justify-center mb-10">
          {/* Gold animated background accent for social icons */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-40 pointer-events-none z-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbe6]/80 via-[#c6a35d]/20 to-transparent blur-2xl opacity-80 animate-gold-pulse"></div>
            {/* shimmer effect removed */}
          </div>
          {[
            {
              label: "LinkedIn",
              icon: (
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z"/>
                </svg>
              ),
              href: "#"
            },
            {
              label: "Facebook",
              icon: (
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h21.349c.733 0 1.326-.593 1.326-1.326v-21.349c0-.733-.593-1.325-1.326-1.325zm-13.538 20.452h-3.691v-10.452h3.691v10.452zm-1.846-11.837c-1.184 0-2.146-.962-2.146-2.146 0-1.184.962-2.146 2.146-2.146s2.146.962 2.146 2.146c0 1.184-.962 2.146-2.146 2.146zm13.384 11.837h-3.691v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.132 1.445-2.132 2.939v5.667h-3.691v-10.452h3.541v1.428h.049c.492-.934 1.693-1.917 3.488-1.917 3.729 0 4.417 2.454 4.417 5.651v5.29z"/>
                </svg>
              ),
              href: "#"
            },
            {
              label: "Twitter",
              icon: (
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.457-2.548z"/>
                </svg>
              ),
              href: "#"
            },
            {
              label: "Instagram",
              icon: (
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.682 1.329-.995.995-1.271 2.406-1.329 3.682-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.329 3.682.995.995 2.406 1.271 3.682 1.329 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.682-1.329.995-.995 1.271-2.406 1.329-3.682.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.329-3.682-.995-.995-2.406-1.271-3.682-1.329-1.28-.058-1.688-.07-4.947-.07z"/>
                </svg>
              ),
              href: "#"
            },
          ].map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-[#c6a35d] shadow-lg bg-white/80 dark:bg-[#232323]/80 hover:bg-[#c6a35d] transition-all duration-300 overflow-hidden z-10`}
              style={{ boxShadow: "0 4px 32px #c6a35d22" }}
            >
              {/* Gold shimmer accent */}
              <span className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#c6a35d]/40 to-transparent animate-gold-card-pulse blur-2xl opacity-60"></span>
              {React.cloneElement(item.icon, {
                className: `w-8 h-8 mb-2 transition-colors ${
                  theme === "dark"
                    ? "text-[#c6a35d] group-hover:text-[#232323]"
                    : "text-[#c6a35d] group-hover:text-[#232323]"
                }`,
              })}
              <span
                className={`font-montserrat font-semibold transition-colors ${
                  theme === "dark"
                    ? "text-[#c6a35d] group-hover:text-[#232323]"
                    : "text-[#c6a35d] group-hover:text-[#232323]"
                }`}
              >
                {item.label}
              </span>
              {/* shimmer sweep overlay removed */}
            </a>
          ))}
        </div>

        {/* Together, We Can Make a Difference */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
          {/* Left: Text content */}
          <div className="flex-1">
            <h2
              className="font-bodoni text-2xl font-semibold mb-2"
              style={{ color: "#c6a35d" }}
            >
              Together, We Can Make a Difference
            </h2>
            <p
              className={`font-montserrat ${
                theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"
              }`}
            >
              At Amaraa Holding, we are more than just a company; we are a movement
              dedicated to creating a sustainable future. Every email, every call, and
              every conversation is a step toward building a better tomorrow.
            </p>
            <p
              className={`font-montserrat mt-4 ${
                theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"
              }`}
            >
              Thank you for reaching out to us. We look forward to connecting with
              you and continuing this remarkable journey together.
            </p>
          </div>
          {/* Right: Handshake image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-56 h-40 md:w-64 md:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#c6a35d]/30 bg-gradient-to-br from-[#fffbe6]/60 to-[#c6a35d]/10">
              <img
                src="/handshake.jpg"
                alt="Handshake"
                className="object-cover w-full h-full"
                style={{ borderRadius: "1rem" }}
              />
              {/* Gold overlay accent */}
              <span className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-[#fffbe6]/10 via-transparent to-[#c6a35d]/10"></span>
              {/* Gold sparkle */}
              <span className="absolute left-6 top-6 text-2xl text-[#c6a35d] opacity-70 animate-gold-sparkle">✨</span>
              <span className="absolute right-6 bottom-6 text-xl text-[#c6a35d] opacity-60 animate-gold-sparkle2">✨</span>
            </div>
          </div>
        </div>

        {/* Gold animation keyframes */}
        <style jsx global>{`
          @media (prefers-reduced-motion: no-preference) {
            .animate-gold-pulse {
              animation: goldPulse 4s ease-in-out infinite alternate;
            }
            @keyframes goldPulse {
              0% { opacity: 0.7; }
              100% { opacity: 1; }
            }
            .animate-gold-sparkle {
              animation: goldSparkle 2.5s infinite alternate;
            }
            @keyframes goldSparkle {
              0% { opacity: 0.2; transform: scale(1) rotate(0deg);}
              50% { opacity: 0.7; transform: scale(1.2) rotate(10deg);}
              100% { opacity: 0.2; transform: scale(1) rotate(0deg);}
            }
            .animate-gold-sparkle2 {
              animation: goldSparkle2 3.2s infinite alternate;
            }
            @keyframes goldSparkle2 {
              0% { opacity: 0.1; transform: scale(1) rotate(0deg);}
              50% { opacity: 0.5; transform: scale(1.15) rotate(-8deg);}
              100% { opacity: 0.1; transform: scale(1) rotate(0deg);}
            }
            .animate-gold-sparkle3 {
              animation: goldSparkle3 2.8s infinite alternate;
            }
            @keyframes goldSparkle3 {
              0% { opacity: 0.1; transform: scale(1) rotate(0deg);}
              50% { opacity: 0.6; transform: scale(1.1) rotate(8deg);}
              100% { opacity: 0.1; transform: scale(1) rotate(0deg);}
            }
            .animate-gold-card-pulse {
              animation: goldCardPulse 3.5s ease-in-out infinite alternate;
            }
            @keyframes goldCardPulse {
              0% { opacity: 0.5; }
              100% { opacity: 1; }
            }
            .animate-gold-bounce {
              animation: goldBounce 1.7s infinite alternate cubic-bezier(0.4,0,0.2,1);
            }
            @keyframes goldBounce {
              0% { transform: translateY(0);}
              60% { transform: translateY(-8px) scale(1.08);}
              100% { transform: translateY(0);}
            }
          }
        `}</style>
      </section>
    </main>
  );
}
