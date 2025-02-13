'use client';
function Loading() {
    return (
      
        <div className="loading z-50">
            <div className="layer1"></div>
            <div className="layer2"></div>
            <div className="layer3"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl bg-black p-4 rounded-xl border-white border">
                Loading....
            </div>
        </div>
    );
}

export default Loading;
