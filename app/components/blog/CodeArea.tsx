
import React from 'react'

type Props = {
    code: string
};

const CodeArea = ({ code }: Props) => {
    return (
        <div
            style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)" }}
            className="w-full overflow-x-auto bg-gray-900 text-white text-sm rounded-md p-5">
            <div
                className="break-words whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                    __html: code
                        .replace(/<pre>/g, '<pre style="white-space:pre-wrap;word-break:break-word;">')
                        .replace(/<code>/g, '<code style="white-space:pre-wrap;word-break:break-word;">')
                }}
            />
        </div>
    );
};

export default CodeArea;