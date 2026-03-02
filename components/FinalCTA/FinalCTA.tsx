'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-dark text-off-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight max-w-2xl">
              Ready to Unlock Hidden Value in London?
            </h2>
            <p className="text-xl text-off-white/70 mb-12 max-w-xl leading-relaxed">
              Contact Wheatsheaf Property to schedule a consultation and discuss your investment objectives with our technical lead.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center">
                  <span className="text-accent">M</span>
                </div>
                <p className="text-off-white/80 font-medium">info@wheatsheafproperty.co.uk</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center">
                  <span className="text-accent">L</span>
                </div>
                <p className="text-off-white/80 font-medium">London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-12 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-serif mb-8 text-accent">Book a Consultation</h3>
            {status === 'success' ? (
              <div className="bg-green-500/20 border border-green-500/50 p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. We will get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-off-white/40">Brief Description of Objectives</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-off-white/20 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again later.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-accent text-brand-dark font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Consultation Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
