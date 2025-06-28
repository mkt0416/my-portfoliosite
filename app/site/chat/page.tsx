
import AuthGuard from "@/app/components/common/AuthGuard";
import Chat from "@/app/components/chat/Chat";

const Page = () => {
    return (
        <AuthGuard>
            <Chat />
        </AuthGuard>
    );
};

export default Page;