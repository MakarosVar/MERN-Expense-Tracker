const dateFormatter= (date) => {
    const newDate = new Date(date);
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(newDate);
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(newDate);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(newDate);
    return `${day}-${month}-${year}`;
};