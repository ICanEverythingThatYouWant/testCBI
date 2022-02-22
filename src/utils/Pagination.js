function getPagesArray(currentPages, totalPages, maxPages) {
    let lengthPage = maxPages;

    if (lengthPage > totalPages) {
        lengthPage = totalPages;
    }

    let getPages = currentPages - Math.floor(lengthPage / 2);
    getPages = Math.max(getPages, 1);
    getPages = Math.min(getPages, 1 + totalPages - lengthPage);

    return Array.from({length: lengthPage}, (i, z) => getPages + z);
}

export default getPagesArray;