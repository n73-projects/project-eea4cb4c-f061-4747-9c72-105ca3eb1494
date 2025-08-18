function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-pulse">
            Hello, World! 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your React + TypeScript + Tailwind CSS application
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="text-sm font-medium text-gray-700">Status: Ready</div>
            </div>
            <p className="text-gray-600 text-sm">
              Your development environment is set up and ready to go!
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="text-sm font-medium text-gray-700">Tech Stack</div>
            </div>
            <div className="text-gray-600 text-sm space-y-1">
              <div>✅ React</div>
              <div>✅ TypeScript</div>
              <div>✅ Tailwind CSS</div>
              <div>✅ Vite</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="text-sm text-gray-500">
            Built with ❤️ using modern web technologies
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
