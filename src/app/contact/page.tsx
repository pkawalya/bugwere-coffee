"use client";

import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const PRIMARY = "#c94449";
const SECONDARY = "#193b2a";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with the Bugwere Coffee Company team." breadcrumb={[{ label: "Contact", href: "/contact" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-raleway)" }}>Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SECONDARY}10` }}>
                    <MapPin className="w-5 h-5" style={{ color: SECONDARY }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Location</p>
                    <p className="text-gray-600 text-sm">Bugwere Region, Eastern Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SECONDARY}10` }}>
                    <Mail className="w-5 h-5" style={{ color: SECONDARY }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <p className="text-gray-600 text-sm">info@bugwerecoffee.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SECONDARY}10` }}>
                    <Phone className="w-5 h-5" style={{ color: SECONDARY }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Phone</p>
                    <p className="text-gray-600 text-sm">+256 (0) XXX XXX XXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-raleway)" }}>Send Us a Message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all text-gray-600">
                      <option>General Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Farmer Registration</option>
                      <option>Media & Press</option>
                      <option>Volunteer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[--color-brand]/20 focus:border-[--color-brand] transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: PRIMARY }}>
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
