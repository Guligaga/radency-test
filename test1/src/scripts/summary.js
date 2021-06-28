import { summaryList, notesList, archivatedList } from './vars';

function setSummary(list, type) {
    Object.values(list).forEach(note => {
        const { category } = note;
        if (Object.hasOwnProperty.call(summaryList, category)) {
            summaryList[category][type]++;
        } else {
            summaryList[category] = { [type]: 1 };
        }
    });
}

export function setSummaryTotal() {
    setSummary(notesList, 'active');
    setSummary(archivatedList, 'archivated');
    Object.keys(summaryList).forEach(key => {
        summaryList[key].category = key;
    });
    return summaryList;
}
