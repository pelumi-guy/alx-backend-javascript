const cleanSet = (set, startString) => {

    const startIdx = startString.length;
    let result = ''

    for (const item of set){
        if (item.startsWith(startString) && startString !== '')
        {
            if (result){
                result += `-${item.slice(startIdx)}`;
            } else {
                result += item.slice(startIdx);
            }
        }
    }

    return result;
}

export default cleanSet;