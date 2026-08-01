import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield } from 'lucide-react';

interface InquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyTitle?: string;
}

export const InquireModal: React.FC<InquireModalProps> = ({
  isOpen,
  onClose,
  initialPropertyTitle,
}) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialPropertyTitle || 'Private Consultation & Viewing Request',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4500);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquire-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
    >
      <div className="bg-[#2D2A26] text-white w-full max-w-2xl p-8 sm:p-12 relative border border-white/20 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12 animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-[#8C7B6A] mx-auto mb-6" />
            <h3 className="font-serif text-3xl mb-3">Viewing Request Confirmed</h3>
            <p className="text-xs text-white/70 max-w-md mx-auto font-light leading-relaxed mb-6">
              Thank you, {formData.name}. Our Private Client Concierge team is verifying availability for &quot;{formData.subject}&quot;. A managing advisor will reach out directly.
            </p>
            <div className="inline-block bg-white/5 px-6 py-2.5 border border-white/10 text-[10px] font-semibold tracking-widest uppercase text-[#8C7B6A]">
              CONFIDENTIAL PROTOCOL #EST-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7B6A] uppercase mb-2 block">
                PRIVATE CLIENT CONCIERGE
            </span>
            <h3 id="inquire-modal-title" className="font-serif text-3xl sm:text-4xl">Schedule Private Viewing</h3>
              <p className="text-xs text-white/70 font-light mt-2">
                All viewings are discreetly arranged under strictly confidential terms.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                  PROPERTY / SERVICE OF INTEREST
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#8C7B6A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexandra Sterling"
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#8C7B6A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                    CONFIDENTIAL EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. principal@wealth.com"
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#8C7B6A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#8C7B6A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                    PREFERRED TIME WINDOW
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#8C7B6A]"
                  >
                    <option value="Morning (09:00 - 12:00)" className="bg-[#2D2A26]">Morning (09:00 - 12:00)</option>
                    <option value="Afternoon (12:00 - 16:00)" className="bg-[#2D2A26]">Afternoon (12:00 - 16:00)</option>
                    <option value="Evening (16:00 - 19:00)" className="bg-[#2D2A26]">Evening (16:00 - 19:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                  PHONE / WHATSAPP NUMBER
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (310) 892-0000"
                  className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#8C7B6A]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1.5">
                  SPECIAL INSTRUCTIONS OR SECURITY REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="E.g. Private transport required, NDA required..."
                  className="w-full bg-black/50 border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#8C7B6A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#8C7B6A] text-white py-4 text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#5A4D40] transition-colors flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Request Confidential Appointment</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
