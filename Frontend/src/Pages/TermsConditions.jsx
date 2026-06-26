import React from "react";
import { Link } from "react-router-dom";
import { FileText, Mail, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function TermsConditions() {
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
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-md">
            Please read these terms and conditions carefully before using our platform or enrolling in our programs.
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
                1. Agreement to Terms
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                By accessing or using the <strong>Knowledge & Karma</strong> website, joining our communities, or enrolling in our online/live training programs, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                2. Description of Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Knowledge & Karma is a learning philanthropy project founded by Pavan Bhattad. We provide live training sessions, online courses, visuals (Mind Maps), templates, and educational materials.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                <strong>Course Fees & Access:</strong> To maximize accessibility, our live interactive sessions are completely free to attend. However, premium deliverables such as recorded sessions, certificates, study materials, and access to learning databases may be subject to additional fees.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                3. Intellectual Property Rights
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Unless otherwise indicated, all content on this website, course curriculums, visual assets, mind maps, slides, videos, and graphics are the intellectual property of Pavan Bhattad and Knowledge & Karma.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                You are granted a limited, personal, non-transferable, and revocable license to access our courses for your personal development. You may not reproduce, redistribute, resell, or exploit any part of our course materials or branding for commercial purposes without our express written consent.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                4. User Registration and Code of Conduct
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                When you enroll in our programs, we may request certain information like your name, email address, and WhatsApp number. In return, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-600">
                <li>Provide accurate, current, and complete registration information.</li>
                <li>Maintain respectful and professional conduct in our WhatsApp groups, online forums, and live chat sessions.</li>
                <li>Refrain from spamming, sharing offensive content, advertising third-party services, or harassing other community members.</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                We reserve the right to suspend or remove any user from our website, courses, or community channels at our sole discretion if they violate these conduct guidelines.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                5. Disclaimer of Warranties
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Our educational programs (such as Speed Reading, Memory Techniques, Mind Maps, and NLP) are designed to provide resources and instruction to support personal growth.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                <strong>No Guarantees:</strong> While these methods have helped thousands of learners globally, your speed of progress, learning retention, and outcomes depend entirely on your individual dedication, practice, and application. We make no guarantees of specific educational, professional, or financial results from taking our courses.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                6. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                To the fullest extent permitted by applicable law, Pavan Bhattad, Knowledge & Karma, and our team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of your participation in our programs or your use of the website.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                7. Governing Law & Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
              </p>
            </div>

            {/* Section 8 */}
            <div className="pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0D1F3C] mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent inline-block" />
                8. Contact Information
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                If you have any questions or clarifications regarding these Terms & Conditions, please contact us:
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
