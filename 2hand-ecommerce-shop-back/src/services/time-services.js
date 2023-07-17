module.exports = {
  getTimestampMinutesFromNow(minutes) {
    const now = new Date();
    const future = new Date(now.getTime() + minutes * 60000);

    const year = future.getFullYear();
    const month = String(future.getMonth() + 1).padStart(2, "0");
    const day = String(future.getDate()).padStart(2, "0");
    const hours = String(future.getHours()).padStart(2, "0");
    const minutesFormatted = String(future.getMinutes()).padStart(2, "0");
    const seconds = String(future.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutesFormatted}:${seconds}`;
  },
};
