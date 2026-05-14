import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errs: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Please enter a valid email address.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errs.message = "Message must be at least 10 characters.";
  return errs;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Message from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json() as { success?: boolean; message?: string };

      if (!data.success) throw new Error(data.message ?? "Failed to send.");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/5 border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 relative">
      <div className="max-w-3xl mx-auto w-full z-10 flex-1 flex flex-col justify-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold gradient-text mb-4 text-glow text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Build Something
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground font-light mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind? Drop me a message and I'll get back to you.
        </motion.p>

        <motion.div
          className="glass-panel rounded-2xl p-6 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-bold gradient-text">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll reply as soon as possible.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="input-name"
                    className={`${inputBase} ${
                      touched.name && errors.name
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : touched.name && !errors.name
                        ? "border-primary/60 focus:ring-primary/30"
                        : "border-white/10 focus:ring-primary/30"
                    }`}
                  />
                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="input-email"
                    className={`${inputBase} ${
                      touched.email && errors.email
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : touched.email && !errors.email
                        ? "border-primary/60 focus:ring-primary/30"
                        : "border-white/10 focus:ring-primary/30"
                    }`}
                  />
                  <AnimatePresence>
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="input-message"
                    className={`${inputBase} resize-none ${
                      touched.message && errors.message
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : touched.message && !errors.message
                        ? "border-primary/60 focus:ring-primary/30"
                        : "border-white/10 focus:ring-primary/30"
                    }`}
                  />
                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {status === "error" && serverError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" /> {serverError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  data-testid="button-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary/20 border border-primary/40 text-primary font-medium hover:bg-primary/30 hover:shadow-[0_0_20px_rgba(145,140,169,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="mailto:Kingmukesh677@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email-contact">
            <Mail className="w-7 h-7" />
          </a>
          <a href="https://github.com/KINGMIK24" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github-contact">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/mukesh-karthik-m-54b892364" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin-contact">
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a href="https://www.instagram.com/mk_king_2410?igsh=MXFxZXEyODlqMnNiNg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram-contact">
            <FaInstagram className="w-7 h-7" />
          </a>
        </motion.div>
      </div>

      <footer className="w-full text-center mt-auto pt-12 pb-6 z-10 text-muted-foreground/40 text-sm tracking-widest uppercase">
        Built by M Mukesh Karthik
      </footer>
    </section>
  );
}
