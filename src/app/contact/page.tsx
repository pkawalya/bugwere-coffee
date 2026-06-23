"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PRIMARY, SECONDARY, FONT_RALEWAY, FONT_OPENSANS, CREAM } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the Bugwere Coffee Company team."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
        backgroundImage="/images/hero-community-meeting.png"
      />

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Contact Info - Sidebar */}
            <ScrollReveal className="lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                {/* Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/images/cocoa-farmer-hd.jpeg"
                    alt="Bugwere Coffee Company community"
                    width={1344}
                    height={896}
                    className="w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: PRIMARY, fontFamily: FONT_OPENSANS }}>
                  Get In Touch
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-8"
                  style={{ fontFamily: FONT_RALEWAY }}
                >
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Whether you&apos;re a farmer looking to join our programs, an organization interested in partnering,
                  or simply want to learn more about our work, we&apos;d love to hear from you.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Bugwere Region, Eastern Uganda" },
                    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@bugwerecoffee.com" },
                    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+256 (0) XXX XXX XXX" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${SECONDARY}10`, color: SECONDARY }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: FONT_RALEWAY }}>{item.label}</p>
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative card */}
                <div
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: SECONDARY }}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 blob-shape opacity-[0.06] bg-white" />
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-2" style={{ fontFamily: FONT_OPENSANS }}>
                    Quick Response
                  </p>
                  <p className="text-white text-lg font-bold mb-2" style={{ fontFamily: FONT_RALEWAY }}>
                    We typically respond within 24 hours
                  </p>
                  <p className="text-white/50 text-sm">
                    For urgent inquiries, please call us directly.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm" style={{ backgroundColor: CREAM }}>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-8"
                  style={{ fontFamily: FONT_RALEWAY }}
                >
                  Send Us a Message
                </h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all text-gray-600">
                      <option>General Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Farmer Registration</option>
                      <option>Media & Press</option>
                      <option>Volunteer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:scale-[1.02]"
                    style={{ backgroundColor: PRIMARY, fontFamily: FONT_OPENSANS }}
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
