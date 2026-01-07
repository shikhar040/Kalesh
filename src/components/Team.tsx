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
      className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Talented individuals working together to revolutionize communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-4">{member.role}</p>
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
