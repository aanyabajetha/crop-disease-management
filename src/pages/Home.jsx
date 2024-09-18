import { Link } from 'react-router-dom';
import TryFreeButton from '../components/TryFreeButton';

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to KhetVaidya</h1>
        <p className="text-xl mb-4">Protecting your crops with AI-powered disease detection</p>
      </section>

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>At KhetVaidya, we're committed to empowering farmers with cutting-edge technology to detect and prevent crop diseases, ensuring food security and sustainable agriculture.</p>
      </section>

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>We envision a world where every farmer has access to advanced crop protection tools, minimizing crop losses and maximizing yields through early disease detection and prevention.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Learn More About Crop Diseases</h2>
        <video controls className="w-full max-w-2xl mx-auto">
          <source src="/videos/crop-disease-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <TryFreeButton />
    </div>
  );
}

export default Home;