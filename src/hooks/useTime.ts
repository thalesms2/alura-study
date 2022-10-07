export function convertTimeToSeconds(time: string) {
    const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

    const secondsOnHours = Number(hours) * 3600;
    const secondsOnMinutes = Number(minutes) * 60;
    return secondsOnHours + secondsOnMinutes + Number(seconds);
}
