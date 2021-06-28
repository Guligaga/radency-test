import { setSummaryTotal } from './summary';
import { summaryTable } from './vars';
import { createSummaryHeader, createSummaryItem } from './summaryRender';

document.addEventListener('DOMContentLoaded', () => {
    const summary = setSummaryTotal();
    const fragment = document.createDocumentFragment();
    const header = createSummaryHeader();
    fragment.append(header);
    Object.values(summary).forEach(item => {
        const li = createSummaryItem(item);
        fragment.append(li);
    });
    summaryTable.append(fragment);
});
