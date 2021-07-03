export function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function presetCategoryName(cat) {
    if(typeof cat !== 'string') {
        return null;
    }
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

export function presetDatesList(list) {
    return Array.isArray(list) ? list.join(', ') : list;
}

export function clearObject(obj) {
    Object.keys(obj).forEach(prop => {
        delete obj[prop];
    });
}
