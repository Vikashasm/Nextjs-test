function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex space-x-2 mb-4">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
      <p className="text-blue-600 text-lg font-medium animate-pulse">
        Loading data...
      </p>
    </div>
  );
}

export default Loader;
