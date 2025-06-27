"use client";
import { useTheme } from "@/components/theme-provider";

export default function AboutUsPage() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen py-12 px-4 sm:px-8 xl:px-32 ${theme === "dark" ? "bg-[#232323]" : "bg-[#f0efe2]"}`}>
      <section className="max-w-4xl mx-auto space-y-10">
        <h1
          className="font-bodoni text-4xl font-bold mb-6 tracking-wide uppercase transition-colors duration-700 ease-in-out animate-fade-in-up"
          style={{ color: "#c6a35d", letterSpacing: "0.08em" }}
        >
          About Us
        </h1>
        {/* 1. Our Story */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} relative overflow-hidden rounded-2xl shadow-2xl p-0 md:p-0 transition-all duration-700 ease-in-out animate-fade-in-up border border-[#c6a35d]/10`}
        >
          {/* Decorative background accent */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#c6a35d]/10 via-transparent to-transparent blur-2xl"></div>
            <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#c6a35d]/20 via-transparent to-transparent blur-2xl"></div>
            <svg className="absolute left-0 bottom-0 w-40 h-40 opacity-30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#c6a35d" fillOpacity="0.08" />
            </svg>
          </div>
          <div className="relative z-10 p-6 md:p-10 flex flex-col items-center">
            <h2 className="font-bodoni text-2xl font-semibold mb-4 tracking-widest uppercase transition-colors duration-700 text-center" style={{ color: "#c6a35d" }}>
              Our Story
            </h2>
            {/* Story timeline */}
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-[#c6a35d] shadow-lg animate-pulse"></span>
                  <span className="w-1 h-16 bg-[#c6a35d]/30"></span>
                </div>
                <div>
                  <h3 className="font-bodoni text-lg font-bold mb-1 text-[#c6a35d]">A Dream Takes Flight</h3>
                  <p className={`font-montserrat text-base leading-relaxed ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                    Amaraa Holding began as Amaraa Airlines, founded with a vision to connect people, cultures, and opportunities across continents. Like the first page of a novel, our journey started with a single flight and a boundless sense of possibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-[#c6a35d] shadow-lg animate-pulse"></span>
                  <span className="w-1 h-16 bg-[#c6a35d]/30"></span>
                </div>
                <div>
                  <h3 className="font-bodoni text-lg font-bold mb-1 text-[#c6a35d]">Chapters of Growth</h3>
                  <p className={`font-montserrat text-base leading-relaxed ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                    Driven by a passion for aviation and a commitment to excellence, our story unfolded into new chapters—expanding into logistics, technology, and more. Each milestone became a plot twist, shaping Amaraa into a multi-industry conglomerate.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-[#c6a35d] shadow-lg animate-pulse"></span>
                  <span className="w-1 h-16 bg-[#c6a35d]/30"></span>
                </div>
                <div>
                  <h3 className="font-bodoni text-lg font-bold mb-1 text-[#c6a35d]">A Living Narrative</h3>
                  <p className={`font-montserrat text-base leading-relaxed ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                    Our mission is to deliver innovative, purpose-driven solutions that empower communities and industries. Through strategic growth and a relentless pursuit of excellence, Amaraa Holding has become a trusted name in global business, recognized for our integrity, agility, and forward-thinking approach.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-[#c6a35d] shadow-lg animate-pulse"></span>
                  <span className="w-1 h-16 bg-[#c6a35d]/30"></span>
                </div>
                <div>
                  <h3 className="font-bodoni text-lg font-bold mb-1 text-[#c6a35d]">The Next Chapter</h3>
                  <p className={`font-montserrat text-base leading-relaxed ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                    Today, we continue to expand our horizons, embracing new challenges and opportunities with a future-focused mindset. Our story is one of transformation, resilience, and a shared vision for a better tomorrow—one that we invite you to help write.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#c6a35d] via-transparent to-[#c6a35d] rounded-full my-8 animate-divider-grow motion-reduce:animate-none" />

        {/* 2. Key Milestones in Aviation Services */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-700 animate-fade-in-up border border-[#c6a35d]/10`}
        >
          <h2 className="font-bodoni text-2xl font-semibold mb-2 tracking-widest uppercase transition-colors duration-700" style={{ color: "#c6a35d" }}>
            Key Milestones in Aviation Services
          </h2>
          <ul className={`list-disc pl-6 font-montserrat space-y-3 transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
            <li className="animate-fade-in-up delay-100">Launched Amaraa Airlines, connecting major cities with world-class service.</li>
            <li className="animate-fade-in-up delay-200">Expanded fleet with next-generation, fuel-efficient aircraft.</li>
            <li className="animate-fade-in-up delay-300">Introduced cargo and charter operations to serve diverse client needs.</li>
            <li className="animate-fade-in-up delay-400">Achieved international safety and service certifications.</li>
            <li className="animate-fade-in-up delay-500">Opened new regional hubs and maintenance facilities.</li>
            <li className="animate-fade-in-up delay-600">Pioneered digital transformation in passenger experience and logistics.</li>
          </ul>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#c6a35d] via-transparent to-[#c6a35d] rounded-full my-8 animate-divider-grow motion-reduce:animate-none" />

        {/* 3. Leadership Team */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-700 animate-fade-in-up border border-[#c6a35d]/10`}
        >
          <h2 className="font-bodoni text-2xl font-semibold mb-2 tracking-widest uppercase transition-colors duration-700" style={{ color: "#c6a35d" }}>
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Chairperson */}
            <div className={`rounded-xl p-4 shadow group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}>
              <span className="inline-block group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300 text-3xl mb-2 animate-bounce-slow">👩‍💼</span>
              <h3 className="font-bodoni text-xl font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>Chairperson: Dr. Amina Rahman</h3>
              <p className={`font-montserrat transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Visionary founder and steward of Amaraa’s values, Dr. Rahman inspires with her commitment to ethical leadership and sustainable growth.
              </p>
            </div>
            {/* CEO */}
            <div className={`rounded-xl p-4 shadow group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}>
              <span className="inline-block group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300 text-3xl mb-2 animate-bounce-slow">🧑‍✈️</span>
              <h3 className="font-bodoni text-xl font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>CEO: Omar Al-Farsi</h3>
              <p className={`font-montserrat transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                A dynamic strategist, Omar leads Amaraa’s global expansion, championing innovation and operational excellence across all divisions.
              </p>
            </div>
            {/* COO */}
            <div className={`rounded-xl p-4 shadow group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}>
              <span className="inline-block group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300 text-3xl mb-2 animate-bounce-slow">🤝</span>
              <h3 className="font-bodoni text-xl font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>COO: Priya Desai</h3>
              <p className={`font-montserrat transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Priya ensures seamless operations and customer satisfaction, blending efficiency with a people-first approach.
              </p>
            </div>
            {/* CFO */}
            <div className={`rounded-xl p-4 shadow group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}>
              <span className="inline-block group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300 text-3xl mb-2 animate-bounce-slow">💼</span>
              <h3 className="font-bodoni text-xl font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>CFO: Michael Chen</h3>
              <p className={`font-montserrat transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Michael drives financial sustainability and transparency, fostering trust with stakeholders and partners.
              </p>
            </div>
            {/* CTO */}
            <div className={`rounded-xl p-4 shadow group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-start md:col-span-2 bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}>
              <span className="inline-block group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300 text-3xl mb-2 animate-bounce-slow">💡</span>
              <h3 className="font-bodoni text-xl font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>CTO: Sofia Petrova</h3>
              <p className={`font-montserrat transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Sofia leads digital transformation, championing technology adoption and innovation for a smarter, greener future.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#c6a35d] via-transparent to-[#c6a35d] rounded-full my-8 animate-divider-grow motion-reduce:animate-none" />

        {/* 4. Core Values */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-700 animate-fade-in-up border border-[#c6a35d]/10`}
        >
          <h2 className="font-bodoni text-2xl font-semibold mb-2 tracking-widest uppercase transition-colors duration-700" style={{ color: "#c6a35d" }}>
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { label: "Integrity", desc: "We act with honesty and uphold the highest ethical standards in all our endeavors.", icon: "🧭" },
              { label: "Innovation", desc: "We embrace creativity and technology to drive progress and deliver value.", icon: "🚀" },
              { label: "Excellence", desc: "We strive for superior quality and continuous improvement in everything we do.", icon: "🏆" },
              { label: "Collaboration", desc: "We believe in the power of teamwork and partnerships to achieve shared goals.", icon: "🤝" },
              { label: "Responsibility", desc: "We are committed to sustainable practices and positive social impact.", icon: "🌱" },
              { label: "Diversity", desc: "We value diverse perspectives and foster an inclusive culture across all divisions.", icon: "🌍" },
            ].map((value) => (
              <div
                key={value.label}
                className={`rounded-xl p-4 shadow group cursor-pointer flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${theme === "dark" ? "from-[#18181b] to-[#232323]" : "from-[#f0efe2] to-white"}`}
              >
                <span className="inline-block group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300 text-2xl mb-2 animate-bounce-slow">{value.icon}</span>
                <span className="font-bodoni text-lg font-bold mb-1 tracking-wide" style={{ color: "#c6a35d" }}>{value.label}</span>
                <span className={`font-montserrat text-sm transition-all duration-700 ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>{value.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#c6a35d] via-transparent to-[#c6a35d] rounded-full my-8 animate-divider-grow motion-reduce:animate-none" />

        {/* 5. Corporate Governance */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-700 animate-fade-in-up border border-[#c6a35d]/10`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Animated Icon/Accent */}
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#c6a35d]/30 to-transparent shadow-lg animate-spin-slow border-2 border-[#c6a35d]/40 mb-4 md:mb-0">
              <span className="text-5xl" role="img" aria-label="Governance">⚖️</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bodoni text-2xl font-semibold mb-2 tracking-widest uppercase transition-colors duration-700 flex items-center gap-2" style={{ color: "#c6a35d" }}>
                Corporate Governance
                <span className="hidden md:inline-block animate-pulse text-[#c6a35d]">•</span>
              </h2>
              <p className={`font-montserrat mb-4 transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Our governance structure is built on transparency, accountability, and ethical practices. The Board of Directors oversees strategic direction, risk management, and compliance, ensuring that Amaraa Holding operates with integrity and responsibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🔍</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Transparency</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Open communication and clear reporting to all stakeholders.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🗂️</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Accountability</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Clear roles, responsibilities, and performance metrics for leadership and teams.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🌱</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Sustainability</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Integrating environmental and social considerations into decision-making.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🤝</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Stakeholder Engagement</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Active dialogue with investors, employees, partners, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#c6a35d] via-transparent to-[#c6a35d] rounded-full my-8 animate-divider-grow motion-reduce:animate-none" />

        {/* 6. Sustainability & Social Responsibility */}
        <section
          className={`mb-10 ${theme === "dark" ? "bg-[#232323]" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-700 animate-fade-in-up border border-[#c6a35d]/10`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Animated Icon/Accent */}
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#c6a35d]/30 to-transparent shadow-lg animate-spin-slow border-2 border-[#c6a35d]/40 mb-4 md:mb-0">
              <span className="text-5xl" role="img" aria-label="Sustainability">🌟</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bodoni text-2xl font-semibold mb-2 tracking-widest uppercase transition-colors duration-700 flex items-center gap-2" style={{ color: "#c6a35d" }}>
                Sustainability & Social Responsibility
                <span className="hidden md:inline-block animate-pulse text-[#c6a35d]">•</span>
              </h2>
              <p className={`font-montserrat mb-4 transition-all duration-700 text-base ${theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"}`}>
                Amaraa Holding is dedicated to environmental stewardship and social impact. We invest in green innovation, sustainable aviation practices, and community initiatives that make a real difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🌱</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Green Innovation</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Adoption of eco-friendly technologies and sustainable fuel alternatives.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🎓</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Education Support</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Scholarships, training, and mentorship for future leaders.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🚑</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">Healthcare & Disaster Relief</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Providing aid and resources to communities in need.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-[#c6a35d]/20 bg-gradient-to-br from-[#c6a35d]/10 to-transparent shadow group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
                  <span className="inline-block text-2xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">🤲</span>
                  <span className="font-bodoni font-bold text-[#c6a35d]">CSR Initiatives</span>
                  <p className="font-montserrat text-sm mt-1 transition-colors duration-300 text-[#232323] dark:text-[#f0efe2]">
                    Ongoing projects that uplift society and protect the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(32px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-divider-grow {
            animation: dividerGrow 1.2s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes dividerGrow {
            from { transform: scaleX(0); opacity: 0.2;}
            to { transform: scaleX(1); opacity: 1;}
          }
          .animate-bounce-slow {
            animation: bounceSlow 2.2s infinite alternate cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes bounceSlow {
            0% { transform: translateY(0);}
            50% { transform: translateY(-8px);}
            100% { transform: translateY(0);}
          }
          .animate-spin-slow {
            animation: spinSlow 7s linear infinite;
          }
          @keyframes spinSlow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-leaf-float {
            animation: leafFloat 3.5s ease-in-out infinite alternate;
          }
          @keyframes leafFloat {
            0% { transform: translate(-50%, -50%) rotate(-8deg) scale(1);}
            50% { transform: translate(-50%, -60%) rotate(8deg) scale(1.08);}
            100% { transform: translate(-50%, -50%) rotate(-8deg) scale(1);}
          }
          .animate-leaf-bounce {
            animation: leafBounce 1.8s infinite alternate cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes leafBounce {
            0% { transform: translateY(0);}
            60% { transform: translateY(-6px) scale(1.08);}
            100% { transform: translateY(0);}
          }
        }
      `}</style>
    </main>
  );
}

