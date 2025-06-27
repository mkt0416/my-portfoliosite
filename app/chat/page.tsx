
import AuthGuard from "../components/common/AuthGuard";
import Chat from "../components/chat/Chat";

const Page = () => {
    return (
        <AuthGuard>
            <Chat />
        </AuthGuard>
    );
};

export default Page;