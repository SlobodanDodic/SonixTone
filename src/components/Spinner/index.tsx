const Spinner: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute top-[40vh] left-1/2 animate-spin -ml-3 rounded-full h-16 w-16 border-t-2 border-gray-500 border-solid" />
      <div className="absolute top-[42vh] left-1/2 animate-spin rounded-full h-10 w-10 border-t-2 border-red-500 border-solid" style={{ animationDirection: 'reverse' }}/>
    </div>
  );
};

export default Spinner;
