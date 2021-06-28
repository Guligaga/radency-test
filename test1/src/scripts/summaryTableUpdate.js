import { setSummaryTotal } from './summary';
// import { summaryTable } from './vars';
import { updateSummaryRender } from './summaryRender';

document.addEventListener('DOMContentLoaded', () => {
    setSummaryTotal();
    updateSummaryRender();
});
