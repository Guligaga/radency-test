export function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function presetCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

export function presetDatesList(list) {
    return list.join(', ');
}

export function clearObject(obj) {
    Object.keys(obj).forEach(prop => {
        delete obj[prop];
    });
}
