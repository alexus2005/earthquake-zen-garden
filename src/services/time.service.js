import dayjs from "dayjs";

export const formatTime = (ticks) => dayjs(ticks).format("MMM D, YYYY, h:mm A");
