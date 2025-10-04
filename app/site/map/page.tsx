
import AllWorks from "@/app/components/map/AllWorks";
import ViewMap from "@/app/components/map/ViewMap";
import LinkArea from "@/app/components/map/LinkArea";
import MapContainer from "@/app/components/map/MapContainer";

const page = async () => {
    return (
        <>
            <ViewMap />
            <LinkArea />
            <MapContainer>
                <AllWorks />
            </MapContainer>
        </>
    );
};

export default page;