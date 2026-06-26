import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section
        className="relative w-full overflow-hidden text-center"
        style={{
          background: "linear-gradient(135deg, #0D1F3C 0%, rgba(13,31,60,0.95) 100%)",
          padding: "80px 24px 120px 24px",
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-white flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2 border border-white/20">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-md">
            Your trust is vital to us. Learn how we collect, use, and protect your information at Knowledge & Karma.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40 mt-2 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
            <span>Last Updated: June 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-6 pb-24 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-black/5 leading-relaxed text-gray-700 font-sans">
          
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                1. Introduction
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Welcome to <strong>Knowledge & Karma</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explain how we collect, use, disclose, and safeguard your information when you visit our website, sign up for our workshops or courses, or interact with us.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                By accessing our website or using our services, you consent to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                2. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                We may collect personal information directly from you when you voluntarily provide it, such as when you fill out contact forms, enroll in our courses, or join our community groups. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
                <li><strong>Identity Data:</strong> Full name, username, or similar identifiers.</li>
                <li><strong>Contact Data:</strong> Email address, phone number (including your WhatsApp number), and billing/delivery address (if applicable).</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, pages viewed, and links clicked.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and device details.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                3. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                We use the information we collect for various business and educational purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
                <li>To deliver our educational services, manage course registrations, and coordinate live training sessions.</li>
                <li>To send you transactional messages, course updates, and links to join our WhatsApp community groups.</li>
                <li>To respond to your inquiries, support requests, and messages sent via our contact forms.</li>
                <li>To send periodic newsletters, details of upcoming live sessions, or free learning resources (which you can opt out of at any time).</li>
                <li>To analyze website usage, improve user experience, and optimize website performance.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                4. Cookies and Tracking
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                We use cookies and similar tracking technologies to monitor traffic and enhance your browsing experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some portions of our site may not function properly if cookies are disabled.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                5. Data Security
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                The security of your personal data is highly important to us. We implement industry-standard administrative, physical, and technical measures designed to protect your information from unauthorized access, loss, alteration, or disclosure. However, please remember that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                6. Third-Party Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Our site may contain links to external sites (such as WhatsApp, social media platforms, or external libraries). We do not control these third-party platforms and are not responsible for their privacy policies or practices. We encourage you to read the privacy policies of any third-party website you visit.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                7. Your Rights & Choices
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Depending on your location, you may have specific rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
                <li>The right to access, update, or correct the personal data we hold about you.</li>
                <li>The right to request the deletion or removal of your personal data from our systems.</li>
                <li>The right to withdraw consent for marketing communications or data processing activities.</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            {/* Section 8 */}
            <div className="pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                8. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, your data rights, or how we protect your privacy, please feel free to reach out:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:pavan@knowledgeandkarma.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors group text-gray-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center text-accent">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-gray-400">Email us</p>
                    <p className="text-xs sm:text-sm font-semibold group-hover:text-accent transition-colors">pavan@knowledgeandkarma.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919665022037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors group text-gray-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-whatsapp/5 flex items-center justify-center text-whatsapp">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-gray-400">WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold group-hover:text-whatsapp transition-colors">+91 96650 22037</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1F3C] hover:text-[#C0176E] transition-colors duration-200"
          >
            Back to Home <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
