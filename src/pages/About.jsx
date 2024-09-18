const TeamMember = ({ name, contribution, photoUrl }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={photoUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p>{contribution}</p>
    </div>
  );
  
  const teamMembers = [
    { name: 'Aanya Bajetha', contribution: 'AI Specialist', photoUrl: '/images/aanya.jpg' },
    { name: 'Vashu Yadav', contribution: 'Project Lead & Backend Developer', photoUrl: '/images/vashu.jpg' },
    { name: 'Parnika Parmar', contribution: 'Frontend Developer', photoUrl: '/images/parnika.jpg' },
    { name: 'Kartik Verma', contribution: 'Data Scientist', photoUrl: '/images/kartik.jpg' },
    { name: 'Vartika Tripathi', contribution: 'UX Designer', photoUrl: '/images/vartika.jpg' },
    { name: 'Riddhi Singh', contribution: 'Quality Assurance Specialist', photoUrl: '/images/riddhi.jpg' },
  ];
  
  const About = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
        <p className="mb-8 text-center">We are a team of passionate individuals dedicated to revolutionizing crop disease detection and management.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    );
  }
  
  export default About;