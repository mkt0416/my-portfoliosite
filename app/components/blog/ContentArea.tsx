
import React from 'react'

type Props = {
    content: string;
};

const ContentArea = ({ content }: Props) => {
    return (
        <div
            className="mt-10 mb-3"
            dangerouslySetInnerHTML={{
                __html: content
            }}
        ></div>
    );
};

export default ContentArea;