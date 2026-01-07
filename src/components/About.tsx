import { Shield, Zap, Globe, Lock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-orange-500">Kalesh</span>
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
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end encryption for all your messages
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Zap className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast message delivery worldwide
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Globe className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Available in 180+ countries worldwide
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Lock className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Private
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
