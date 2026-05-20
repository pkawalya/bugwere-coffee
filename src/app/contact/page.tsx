"use client";

import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactInfoItem from "@/components/ui/ContactInfoItem";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PRIMARY } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with the Bugwere Coffee Company team." breadcrumb={[{ label: "Contact", href: "/contact" }]} />
      <Section background="white" py="xl">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-raleway)" }}>Get In Touch</h3>
              <div className="space-y-5">
                <ContactInfoItem
                  icon={<MapPin className="w-5 h-5" />}
                  label="Location"
                  value="Bugwere Region, Eastern Uganda"
                />
                <ContactInfoItem
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="info@bugwerecoffee.com"
                />
                <ContactInfoItem
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone"
                  value="+256 (0) XXX XXX XXX"
                />
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
                  <Button variant="primary" type="submit" icon={<Send className="w-4 h-4" />} iconPosition="left">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
