import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent neon-text">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:glow-effect transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">support@kalesh.com</p>
                  <p className="text-gray-600 dark:text-gray-300">press@kalesh.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:glow-effect transition-all">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-600 dark:text-gray-300">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:glow-effect transition-all">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl dark:glow-border border border-gray-200 dark:border-orange-500/30">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 via-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-effect"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
