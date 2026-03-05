const formatDate = (dateString: string): {date: string; time: string} => {
    const date = new Date(dateString);

    // Format date
    const optionsDate: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);

    // Format time
    const optionsTime: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        // second: "numeric",
        // timeZoneName: "short",
    };
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return {date: formattedDate, time: formattedTime};
};

const formatUUID = (orderId: string): string => {
    const parts = orderId.split('-');
    return parts[0].toUpperCase();
};

export {formatDate, formatUUID};
