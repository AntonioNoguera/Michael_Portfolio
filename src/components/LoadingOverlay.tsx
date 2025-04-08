const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 bg-black  z-50 flex items-center justify-center">
            <div className="loader border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin" />
        </div>
    );
};

export default LoadingOverlay;