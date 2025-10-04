
import { ReactNode } from "react";

const MapContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-32">
            {children}
        </div>
    );
};

export default MapContainer;