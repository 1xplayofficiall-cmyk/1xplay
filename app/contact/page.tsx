"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate server submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "support",
        message: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get In <span className="bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="mt-4 text-base text-white/50">
          Have an app suggestion? Discovered a bug? Drop us a line and our sandbox team will investigate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        
        {/* Contact Form: 7 cols */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Subject Focus
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none [&>option]:bg-[#041220] [&>option]:text-white"
              >
                <option value="support">Technical Support</option>
                <option value="app-submission">Submit an App</option>
                <option value="feedback">General Feedback</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your inquiry..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-6 py-4 text-sm font-bold text-black shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Transmitting packet...
                  </>
                ) : (
                  "Submit Form"
                )}
              </button>
            </div>

            {success && (
              <div className="mt-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 p-4 text-center">
                <p className="text-sm font-bold text-accent-cyan neon-text-cyan animate-pulse">
                  Transmission Success! We have received your query.
                </p>
              </div>
            )}

          </form>
        </div>

        {/* Sidebar Info: 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Contact Channels</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <span className="text-accent-cyan text-lg">✉</span>
                <div>
                  <div className="font-bold text-white">Direct Email</div>
                  <div className="text-white/50 mt-1">support@1xplay.io</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <span className="text-accent-indigo text-lg">💬</span>
                <div>
                  <div className="font-bold text-white">Discord Guild</div>
                  <div className="text-white/50 mt-1">discord.gg/1xplay</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <span className="text-accent-purple text-lg">📍</span>
                <div>
                  <div className="font-bold text-white">HQ Coordinates</div>
                  <div className="text-white/50 mt-1">Virtual Orbit Sector 7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-accent-cyan/5 to-transparent">
            <h3 className="text-sm font-bold text-accent-cyan mb-2">Response Benchmarks</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Our support cycles target responding to query requests within 24 hours. General code contributions and dashboard integrations are audited weekly.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
