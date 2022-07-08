import dayjs from 'dayjs';

//Sort in-place by date
function sortByDate(data, order) {
    data?.sort((a, b) => {
        let { date: date1 } = a;
        let { date: date2 } = b;

        date1 = dayjs(date1);
        date2 = dayjs(date2);

        const diff = date1.diff(date2, 'day', true);

        return diff ? (order === 'newest') ? -diff : diff : 0;
    });
}

export default sortByDate;