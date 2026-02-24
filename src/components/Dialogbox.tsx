const DialogBox = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-[#1a1a1a] backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 border border-white/20 text-center">
        
  
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition-colors text-2xl font-bold"
        >
          ✕
        </button>

        <h3 className="text-xl font-roboto font-bold text-gray-200 mb-4">Welcome to CatOs </h3>
        
        <p className="text-gray-300 font-roboto leading-relaxed">
          It might or may not work on phone because it's designed for PC. 
          Use a desktop browser for the best experience 
        </p>

        <button 
          onClick={onClose}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
export default DialogBox;