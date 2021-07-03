import {CHANGE_ACTIVE_COUNT, CHANGE_ARCHIVED_COUNT} from './types';

export function changeActiveCount(count, num) {
    return {
        type: CHANGE_ACTIVE_COUNT,
        payload: count + num,
    }
}

export function changeArchivedCount(count, num) {
    return {
        type: CHANGE_ARCHIVED_COUNT,
        payload: count + num,
    }
}

export function setSummaryTotal(notesList, archivedList) {

}

// function setSummary(list, type) {
//     Object.values(list).forEach(note => {
//         const { category } = note;
//         incSingleSummary(category, type);
//     });
// }

// export function setSummaryTotal() {
//     clearObject(summaryList);
//     setSummary(notesList, 'active');
//     setSummary(archivedList, 'archived');
//     Object.keys(summaryList).forEach(key => {
//         summaryList[key].category = key;
//     });
//     return summaryList;
// }