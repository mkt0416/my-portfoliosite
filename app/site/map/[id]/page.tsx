
import SingleWorks from "@/app/components/map/SingleWorks";
import LinkArea from "@/app/components/map/LinkArea";
import MapContainer from "@/app/components/map/MapContainer";

type Props = {
    params: {
        id: string;
    };
};

const page = ({ params }: Props) => {
    const siteId = params.id;

    return (
        <>
            <LinkArea />
            <MapContainer>
                <SingleWorks siteId={siteId} />
            </MapContainer>
        </>
    );
};

export default page;