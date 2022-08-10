
function* iterator() {
    let index = 1;
    while(index > 0) {
        yield index;
        index++;
    }
}

export default iterator;