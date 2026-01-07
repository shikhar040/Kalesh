import { Shield, Zap, Globe, Lock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent neon-text">KALESH</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make communication simple, secure, and accessible to everyone,
            everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Connecting the World
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded with a vision to break down communication barriers, Kalesh has grown to
              become one of the most trusted messaging platforms globally. Our commitment to
              privacy, security, and user experience drives everything we do.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With end-to-end encryption, lightning-fast delivery, and a feature-rich experience,
              we ensure your conversations remain private and seamless across all devices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <Shield className="w-12 h-12 text-orange-500 mb-4 group-hover:glow-effect" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                SECURE
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end encryption for all your messages
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <Zap className="w-12 h-12 text-orange-500 mb-4 group-hover:glow-effect" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">FAST</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast message delivery worldwide
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <Globe className="w-12 h-12 text-orange-500 mb-4 group-hover:glow-effect" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">GLOBAL</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Available in 180+ countries worldwide
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:glow-border group border border-gray-200 dark:border-orange-500/30">
              <Lock className="w-12 h-12 text-orange-500 mb-4 group-hover:glow-effect" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                PRIVATE
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Your data belongs to you, always
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
