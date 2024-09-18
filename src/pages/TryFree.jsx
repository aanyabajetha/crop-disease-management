import { useState } from 'react';

const TryFree = () => {
  const [image, setImage] = useState(null);
  const [environmentData, setEnvironmentData] = useState({
    temperature: 25,
    humidity: 60,
    soilMoisture: 40,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleEnvironmentChange = (e) => {
    setEnvironmentData({ ...environmentData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the image and environment data to your backend for analysis
    console.log('Analyzing image with environment data:', environmentData);
    // You would then display the results returned from the backend
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Try CropCare for Free</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">Upload Crop Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="w-full"
          />
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Uploaded crop" className="w-full rounded-md" />
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Environmental Data</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="temperature" className="block mb-1">Temperature (°C)</label>
              <input
                type="number"
                id="temperature"
                name="temperature"
                value={environmentData.temperature}
                onChange={handleEnvironmentChange}
                className="w-full px-2 py-1 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="humidity" className="block mb-1">Humidity (%)</label>
              <input
                type="number"
                id="humidity"
                name="humidity"
                value={environmentData.humidity}
                onChange={handleEnvironmentChange}
                className="w-full px-2 py-1 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="soilMoisture" className="block mb-1">Soil Moisture (%)</label>
              <input
                type="number"
                id="soilMoisture"
                name="soilMoisture"
                value={environmentData.soilMoisture}
                onChange={handleEnvironmentChange}
                className="w-full px-2 py-1 border rounded-md"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Analyze Crop
        </button>
      </form>
    </div>
  );
}

export default TryFree;