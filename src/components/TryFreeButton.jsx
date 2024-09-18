import { Link } from 'react-router-dom';

const TryFreeButton = () => (
  <div className="fixed bottom-4 right-4">
    <Link to="/try-free" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
      Try Free
    </Link>
  </div>
);

export default TryFreeButton;