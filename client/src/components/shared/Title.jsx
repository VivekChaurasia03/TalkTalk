import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
    title = "TalkTalk",
    description = "This is the Chat App called TalkTalk",
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
        </Helmet>
    );
};

export default Title;
