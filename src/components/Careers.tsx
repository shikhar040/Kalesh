import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Security Analyst',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'London, UK',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Contract',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Join Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent neon-text">TEAM</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of something extraordinary. We're looking for talented individuals to help shape
            the future of communication.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-x-2 border border-gray-200 dark:border-orange-500/30 dark:glow-border group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide hover:shadow-xl transition-all duration-300 hover:scale-110 glow-effect self-start md:self-center">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-red-600 rounded-3xl p-12 text-center text-white glow-border">
          <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Don't see the right position?</h3>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for exceptional talent. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <button className="bg-white text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-xl transition-all duration-300 hover:scale-105">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
