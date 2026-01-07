import {
  MessageSquare,
  Video,
  Phone,
  Users,
  FileText,
  Image,
  Mic,
  Share2,
  Bell,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Instant Messaging',
      description: 'Send text messages instantly with read receipts and typing indicators',
    },
    {
      icon: Video,
      title: 'Video Calls',
      description: 'Crystal clear video calls with up to 50 participants',
    },
    {
      icon: Phone,
      title: 'Voice Calls',
      description: 'High-quality voice calls with minimal data usage',
    },
    {
      icon: Users,
      title: 'Group Chats',
      description: 'Create groups with up to 100,000 members',
    },
    {
      icon: FileText,
      title: 'File Sharing',
      description: 'Share documents, PDFs, and files up to 2GB',
    },
    {
      icon: Image,
      title: 'Media Sharing',
      description: 'Send photos and videos in original quality',
    },
    {
      icon: Mic,
      title: 'Voice Messages',
      description: 'Record and send voice messages with ease',
    },
    {
      icon: Share2,
      title: 'Status Updates',
      description: 'Share moments with status updates that disappear after 24 hours',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Customizable notifications for different chats and contacts',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Powerful <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent neon-text">FEATURES</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need for seamless communication, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border border-gray-200 dark:border-orange-500/30 dark:glow-border group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:glow-effect transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
