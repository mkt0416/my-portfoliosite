
import React from 'react'

type Props = {
    content: string;
};

const ContentArea = ({ content }: Props) => {
    return (
        <div
            className="my-5 text-xs sm:text-lg"
            dangerouslySetInnerHTML={{
                __html: content
            }}
        ></div>
    );
};

export default ContentArea;