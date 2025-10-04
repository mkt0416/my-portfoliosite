
import ViewMap from "@/app/components/map/ViewMap";
import LinkArea from "@/app/components/map/LinkArea";
import MapContainer from "@/app/components/map/MapContainer";
import CreateForm from "@/app/components/map/CreateForm";


const page = () => {
    return (
        <div>
            <ViewMap />
            <LinkArea />
            <MapContainer>
                <CreateForm />
            </MapContainer>
        </div>
    );
};

export default page;