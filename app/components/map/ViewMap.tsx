
"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/context/ContextProvider";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Loading from "@/app/components/common/Loading";

const containerStyle = {
    width: "100%",
    height: "450px"
};

const ViewMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY ?? "",
    });
    const router = useRouter();
    const context = useContext(AppContext);
    const location = context?.location;
    const setLocation = context?.setLocation;
    const works = context?.works;

    useEffect(() => {
        if (!setLocation) return;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
                (error) => {
                    console.log("位置情報の取得に失敗しました", error);
                }
            );
        }
    }, [setLocation]);

    const center = location ?? { lat: 38.2404, lng: 140.3633, };

    return (
        <div>
            {!isLoaded
                ? <Loading />
                : (
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                        {location && (
                            <Marker
                                position={center}
                                title="現在地"
                            />
                        )}
                        {works && works.map((work) => (
                            <Marker
                                key={work._id}
                                position={{ lat: work.location.lat, lng: work.location.lng }}
                                icon={{
                                    url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                                }}
                                title={`${work.siteName} (${work.city})`}
                                onClick={() => router.push(`/site/map/${work._id}`)}
                            />
                        ))}
                    </GoogleMap>
                )}
        </div>
    );
};

export default ViewMap;