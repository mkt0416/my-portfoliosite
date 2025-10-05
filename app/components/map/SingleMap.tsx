
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "350px"
};

const SingleMap = ({ location, siteName }: {
    location:
    { lat: number, lng: number } | null,
    siteName: string,
}) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY ?? "",
    });
    return (
        <div className="w-full h-full">
            {isLoaded && location && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={16}
                    options={{
                        scrollwheel: true,
                        gestureHandling: "auto",
                    }}
                >
                    <Marker
                        position={location}
                        title={siteName}
                    />
                </GoogleMap>
            )}
        </div>
    );
};

export default SingleMap;