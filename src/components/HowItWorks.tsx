import { Download, UserPlus, MessageCircle, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: 'Download the App',
      description: 'Get Kalesh from your app store on iOS, Android, or desktop platforms',
      step: '01',
    },
    {
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up with your phone number and verify it with a simple code',
      step: '02',
    },
    {
      icon: MessageCircle,
      title: 'Start Messaging',
      description: 'Add contacts and start chatting instantly with anyone, anywhere',
      step: '03',
    },
    {
      icon: CheckCircle,
      title: 'Enjoy Secure Communication',
      description: 'All your messages are protected with end-to-end encryption',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started in minutes with our simple and straightforward process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="bg-white dark:bg-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
