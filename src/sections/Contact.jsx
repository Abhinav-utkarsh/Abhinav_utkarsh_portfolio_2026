import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ⚠️ REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
    formData.append("access_key", "07cceb0d-e863-41b4-9575-2840b29c0f80");
    formData.append("subject", "New Message from Portfolio Website");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-sky-400">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative group">
           {/* Gradient Border Effect */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Name</label>
                  <div className="relative group/input">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-sky-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </span>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder-slate-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email</label>
                  <div className="relative group/input">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-sky-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder-slate-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Message</label>
                <div className="relative group/input">
                  <span className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </span>
                  <textarea 
                    name="message" 
                    required 
                    rows="5" 
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder-slate-500 transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>

              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-sm mt-4 p-4 rounded-xl ${result.includes("Success") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                >
                  {result}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;