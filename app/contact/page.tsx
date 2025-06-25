"use client";
import { useTheme } from "@/components/theme-provider";

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
        <p
          className={`font-montserrat text-lg mb-8 ${
            theme === "dark" ? "text-[#f0efe2]" : "text-[#232323]"
          }`}
        >
          At Amaraa Holding, we believe that every connection we make is a chapter
          in our ongoing story—a story woven with threads of innovation,
          sustainability, and community impact. As a bestselling author crafts a
          narrative that captivates the heart, we invite you to be part of our
          journey and engage with us on this exciting path.
        </p>

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

        {/* Get in Touch Cards */}
        <h2
          className="font-bodoni text-2xl font-semibold mb-6"
          style={{ color: "#c6a35d" }}
        >
          Get in Touch
        </h2>
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="bg-[#f0efe2] rounded-xl shadow-lg p-6 flex flex-col">
            <span className="font-bold text-[#c6a35d] font-bodoni text-lg mb-2">
              General Inquiries
            </span>
            <p className="font-montserrat text-[#232323] mb-2">
              For general questions about Amaraa Holding, our divisions, or our
              initiatives, please reach out to us.
            </p>
            <a
              href="mailto:info@amaraaholding.com"
              className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors"
            >
              info@amaraaholding.com
            </a>
          </div>
          <div className="bg-[#f0efe2] rounded-xl shadow-lg p-6 flex flex-col">
            <span className="font-bold text-[#c6a35d] font-bodoni text-lg mb-2">
              Careers
            </span>
            <p className="font-montserrat text-[#232323] mb-2">
              Interested in joining the Amaraa family? Visit our Careers page or
              send your resume and cover letter.
            </p>
            <a
              href="mailto:careers@amaraaholding.com"
              className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors"
            >
              careers@amaraaholding.com
            </a>
          </div>
          <div className="bg-[#f0efe2] rounded-xl shadow-lg p-6 flex flex-col">
            <span className="font-bold text-[#c6a35d] font-bodoni text-lg mb-2">
              Media Inquiries
            </span>
            <p className="font-montserrat text-[#232323] mb-2">
              For press releases, media requests, or partnerships, contact our
              media relations team.
            </p>
            <a
              href="mailto:media@amaraaholding.com"
              className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors"
            >
              media@amaraaholding.com
            </a>
          </div>
          <div className="bg-[#f0efe2] rounded-xl shadow-lg p-6 flex flex-col">
            <span className="font-bold text-[#c6a35d] font-bodoni text-lg mb-2">
              Feedback & Suggestions
            </span>
            <p className="font-montserrat text-[#232323] mb-2">
              Your thoughts and feedback are crucial to our growth. Please share
              your suggestions or ideas.
            </p>
            <a
              href="mailto:feedback@amaraaholding.com"
              className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors"
            >
              feedback@amaraaholding.com
            </a>
          </div>
          <div className="bg-[#f0efe2] rounded-xl shadow-lg p-6 flex flex-col md:col-span-2">
            <span className="font-bold text-[#c6a35d] font-bodoni text-lg mb-2">
              Visit Us
            </span>
            <p className="font-montserrat text-[#232323] mb-2">
              We invite you to visit us at our headquarters to learn more about
              our mission and vision. To schedule a visit or a meeting, please
              contact us.
            </p>
            <a
              href="mailto:visit@amaraaholding.com"
              className="font-montserrat text-[#c6a35d] underline hover:text-[#232323] transition-colors"
            >
              visit@amaraaholding.com
            </a>
          </div>
        </div>

        {/* Creative Social Media Section */}
        <h2
          className="font-bodoni text-2xl font-semibold mb-4"
          style={{ color: "#c6a35d" }}
        >
          Connect with Us on Social Media
        </h2>
        <div className="flex flex-wrap gap-6 justify-center mb-10">
          <a
            href="#"
            className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-[#c6a35d] bg-[#232323] hover:bg-[#c6a35d] transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg
              className="w-8 h-8 mb-2 text-[#c6a35d] group-hover:text-[#232323] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z" />
            </svg>
            <span className="font-montserrat text-[#c6a35d] group-hover:text-[#232323] transition-colors">
              LinkedIn
            </span>
          </a>
          <a
            href="#"
            className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-[#c6a35d] bg-[#232323] hover:bg-[#c6a35d] transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg
              className="w-8 h-8 mb-2 text-[#c6a35d] group-hover:text-[#232323] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h21.349c.733 0 1.326-.593 1.326-1.326v-21.349c0-.733-.593-1.325-1.326-1.325zm-13.538 20.452h-3.691v-10.452h3.691v10.452zm-1.846-11.837c-1.184 0-2.146-.962-2.146-2.146 0-1.184.962-2.146 2.146-2.146s2.146.962 2.146 2.146c0 1.184-.962 2.146-2.146 2.146zm13.384 11.837h-3.691v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.132 1.445-2.132 2.939v5.667h-3.691v-10.452h3.541v1.428h.049c.492-.934 1.693-1.917 3.488-1.917 3.729 0 4.417 2.454 4.417 5.651v5.29z" />
            </svg>
            <span className="font-montserrat text-[#c6a35d] group-hover:text-[#232323] transition-colors">
              Facebook
            </span>
          </a>
          <a
            href="#"
            className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-[#c6a35d] bg-[#232323] hover:bg-[#c6a35d] transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg
              className="w-8 h-8 mb-2 text-[#c6a35d] group-hover:text-[#232323] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.457-2.548z" />
            </svg>
            <span className="font-montserrat text-[#c6a35d] group-hover:text-[#232323] transition-colors">
              Twitter
            </span>
          </a>
          <a
            href="#"
            className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-[#c6a35d] bg-[#232323] hover:bg-[#c6a35d] transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg
              className="w-8 h-8 mb-2 text-[#c6a35d] group-hover:text-[#232323] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.682 1.329-.995.995-1.271 2.406-1.329 3.682-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.329 3.682.995.995 2.406 1.271 3.682 1.329 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.682-1.329.995-.995 1.271-2.406 1.329-3.682.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.329-3.682-.995-.995-2.406-1.271-3.682-1.329-1.28-.058-1.688-.07-4.947-.07z" />
            </svg>
            <span className="font-montserrat text-[#c6a35d] group-hover:text-[#232323] transition-colors">
              Instagram
            </span>
          </a>
        </div>

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
      </section>
    </main>
  );
}
