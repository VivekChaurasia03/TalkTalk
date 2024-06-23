const fileFormat = (url = "") => {
    const fileExtention = url.split(".").pop();
    if (
        fileExtention == "mp4" ||
        fileExtention == "webm" ||
        fileExtention == "ogg"
    )
        return "video";
    if (fileExtention == "mp3" || fileExtention == "wave") return "audio";
    if (
        fileExtention == "png" ||
        fileExtention == "jpg" ||
        fileExtention == "jpeg" ||
        fileExtention == "gif"
    )
        return "image";

    return "file";
};

const transformImage = (url = "", width = 100) => url;

export { fileFormat, transformImage };
