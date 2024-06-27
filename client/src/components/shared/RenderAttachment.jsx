import React from "react";
import { transformImage } from "../../lib/Features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderAttachment = (file, url, width = "200px", height = "150px") => {
    switch (file) {
        case "video":
            return <video src={url} preload="none" width={"200px"} controls />;

        case "audio":
            return <audio src={url} preload="none" controls />;
        case "image":
            return (
                <img
                    src={transformImage(url, 200)}
                    alt="Attachment"
                    width={width}
                    height={height}
                    style={{
                        objectFit: "contain",
                    }}
                />
            );
        default:
            return <FileOpenIcon />;
    }
};

export default RenderAttachment;
