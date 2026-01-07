import { Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">
              Connect with
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent neon-text">
                EVERYONE
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Fast, secure, and reliable messaging for everyone. Stay connected with friends,
              family, and communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 via-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 glow-effect uppercase tracking-wide">
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white dark:bg-slate-900 text-gray-900 dark:text-white border-2 border-orange-500 px-8 py-4 rounded-full font-bold hover:glow-border transition-all duration-300 hover:scale-105 uppercase tracking-wide glow-border">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="flex items-center space-x-8 text-center md:text-left">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">2B+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">180+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">100B+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Messages Daily</div>
              </div>
            </div>
          </div>

          <div className="relative float-animation">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-40 -z-10"></div>
            <div className="relative z-10 bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 glow-border">
              <img
                src="/kaleshlog.jpeg"
                alt="Kalesh App"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
