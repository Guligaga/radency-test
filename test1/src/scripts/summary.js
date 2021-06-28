import { clearObject } from './utils';
import { summaryList, notesList, archivedList } from './vars';

export function incSingleSummary(category, type) {
    if (!Object.hasOwnProperty.call(summaryList, category)) {
        summaryList[category] = { [type]: 1, category };
    } else if (!Object.hasOwnProperty.call(summaryList[category], type)) {
        summaryList[category][type] = 1;
    } else {
        summaryList[category][type]++;
    }
    return summaryList;
}

export function decSingleSummary(category, type) {
    if (!Object.hasOwnProperty.call(summaryList, category)) {
        return new Error(`${category}: No such property in summaryList`);
    }
    summaryList[category][type]--;
    return summaryList;
}

export function clearEmpty() {
    Object.entries(summaryList).forEach(([key, value]) => {
        if (!value.active && !value.archived) {
            delete summaryList[key];
        }
    });
    return summaryList;
}

function setSummary(list, type) {
    Object.values(list).forEach(note => {
        const { category } = note;
        incSingleSummary(category, type);
    });
}

export function setSummaryTotal() {
    clearObject(summaryList);
    setSummary(notesList, 'active');
    setSummary(archivedList, 'archived');
    Object.keys(summaryList).forEach(key => {
        summaryList[key].category = key;
    });
    console.group('setSummaryTotal');
    console.log(notesList);
    console.log(archivedList);
    console.log(summaryList);
    console.groupEnd();
    return summaryList;
}
