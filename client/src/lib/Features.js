import moment from "moment";

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

const getLast7Days = () => {
    const currentDate = moment();
    const Last7Days = [];
    for (let i = 0; i < 7; i++) {
        const dayDate = currentDate.clone().subtract(i, "days");
        const dayName = dayDate.format("dddd");
        Last7Days.unshift(dayName);
    }
    return Last7Days;
};

export { fileFormat, transformImage, getLast7Days };
