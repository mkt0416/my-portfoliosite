
import AuthGuard from "@/app/components/common/AuthGuard";

type Props = {
    children: React.ReactNode;
};

const BlogLayout = ({ children }: Props) => {
    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
};

export default BlogLayout;