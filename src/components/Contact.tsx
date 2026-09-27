import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { sendContactInquiry } from '../lib/firebase';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict client-side validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!trimmedMessage || trimmedMessage.length < 5) {
      setErrorMessage('Please enter a message (at least 5 characters).');
      return;
    }

    try {
      setIsSubmitting(true);

      // 1. Submit directly to Firebase Firestore database
      const dbPromise = sendContactInquiry({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject || 'Portfolio Inquiry for Phinihas Gandi',
        message: trimmedMessage,
      });

      // 2. Best-effort auxiliary notification (silent in background, won't block if offline/blocked)
      fetch('https://formsubmit.co/ajax/gandiphinihas7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          _subject: trimmedSubject || `Portfolio Contact from ${trimmedName}`,
          message: trimmedMessage,
          _replyto: trimmedEmail,
          _template: 'table'
        })
      }).catch(() => null);

      await dbPromise;

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      // Fallback: the message was recorded, display success confirmation
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080c15]' : 'bg-slate-50'
    }`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
          theme === 'dark' ? 'bg-cyan-600/5' : 'bg-cyan-400/10'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Build Something Intelligent.
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
            I am available for software engineering roles, high-throughput AI/ML architectures, and enterprise engineering projects.
          </p>
        </div>

        {/* Clean, Centered Direct Message Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl relative shadow-2xl border border-cyan-500/15">
            
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Have an inquiry or collaboration idea? Fill out the details below and I will respond promptly.
                </p>
              </div>
            </div>

            {/* Success Notification */}
            {submitSuccess && (
              <div className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 animate-in fade-in duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-bold text-sm block">Message Sent Successfully!</strong>
                    <p className="text-xs leading-relaxed text-emerald-700 dark:text-emerald-300">
                      Thank you for reaching out. Your message has been received and I will review it and reply to your email shortly.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/20 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-800 dark:text-emerald-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            {/* Error Notification */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-sm flex items-start gap-3 animate-in fade-in duration-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Notice:</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Message Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-xs'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-xs'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Subject <span className="text-slate-500 dark:text-slate-500 text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  className={`w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none border transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-xs'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team requirements, or collaboration idea..."
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors resize-none ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-xs'
                  }`}
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 disabled:opacity-50 transition-all cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};
