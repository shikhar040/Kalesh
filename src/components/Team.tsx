import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Co-Founder',
      image: '#',
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-Founder',
      image: '#',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: '#',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '#',
    },
    {
      name: 'David Kumar',
      role: 'Head of Engineering',
      image: '#',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Security',
      image: '#',
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent neon-text">TEAM</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Talented individuals working together to revolutionize communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 dark:glow-border group border border-gray-200 dark:border-orange-500/30"
            >
              <div className="relative h-80 bg-gradient-to-br from-orange-500 via-orange-500 to-red-600 flex items-center justify-center group-hover:glow-effect transition-all">
                <div className="text-white text-6xl font-black tracking-tight">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
