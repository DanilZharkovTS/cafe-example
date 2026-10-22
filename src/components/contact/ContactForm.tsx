"use client";

import { useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import LeafIcon from "../LeafIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-[#141210] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <AnimateOnScroll animation="text-slide-up" delay={100}>
            <span className="font-script text-7xl sm:text-8xl text-[#CFA670] tracking-normal block">
              Get
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="text-slide-up" delay={200}>
            <h2 className="font-lato text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#faf8f5] -mt-2 mb-3">
              In Touch
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={300}>
            <LeafIcon className="w-7 h-9 text-[#CFA670] mx-auto opacity-95 my-2" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="font-lato text-sm sm:text-base text-[#a3998c] leading-relaxed">
              Have a question, feedback, or private event request? Send us a note below and our team will get back to you within 24 hours.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Form Container */}
        <AnimateOnScroll animation="fade-up" delay={200} duration={800}>
          <div className="bg-[#181411] border border-[#2d251e] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden font-lato">
            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#CFA670]/10 border border-[#CFA670] flex items-center justify-center text-[#CFA670] mb-4">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#faf8f5] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#a3998c] max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out to Amber Mug Coffee. We have received your inquiry and will respond to your email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-full border border-[#CFA670] text-xs font-bold uppercase tracking-widest text-[#CFA670] hover:bg-[#CFA670] hover:text-[#12100e] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#ded7cc] mb-2"
                    >
                      Your Name <span className="text-[#CFA670]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full bg-[#12100e] border border-[#2d251e] rounded-xl px-4 py-3.5 text-sm text-[#f5f2ec] placeholder-[#6b6256] focus:outline-none focus:border-[#CFA670] focus:ring-1 focus:ring-[#CFA670] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#ded7cc] mb-2"
                    >
                      Your Email <span className="text-[#CFA670]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@example.com"
                      className="w-full bg-[#12100e] border border-[#2d251e] rounded-xl px-4 py-3.5 text-sm text-[#f5f2ec] placeholder-[#6b6256] focus:outline-none focus:border-[#CFA670] focus:ring-1 focus:ring-[#CFA670] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-[#ded7cc] mb-2"
                  >
                    Subject <span className="text-[#CFA670]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="General Inquiry / Private Event / Roastery"
                    className="w-full bg-[#12100e] border border-[#2d251e] rounded-xl px-4 py-3.5 text-sm text-[#f5f2ec] placeholder-[#6b6256] focus:outline-none focus:border-[#CFA670] focus:ring-1 focus:ring-[#CFA670] transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#ded7cc] mb-2"
                  >
                    Your Message <span className="text-[#CFA670]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your event, feedback, or question..."
                    className="w-full bg-[#12100e] border border-[#2d251e] rounded-xl px-4 py-3.5 text-sm text-[#f5f2ec] placeholder-[#6b6256] focus:outline-none focus:border-[#CFA670] focus:ring-1 focus:ring-[#CFA670] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center sm:text-left">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#CFA670] text-[#12100e] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#CFA670]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    <span className="relative z-10">
                      {status === "submitting" ? "Sending Message..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-[#deb47b] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
