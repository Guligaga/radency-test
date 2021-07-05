import { setSummaryTotal } from './summary';
// import { summaryTable } from '../constants';
import { updateSummaryRender } from './summaryRender';

document.addEventListener('DOMContentLoaded', () => {
    setSummaryTotal();
    updateSummaryRender();
});
