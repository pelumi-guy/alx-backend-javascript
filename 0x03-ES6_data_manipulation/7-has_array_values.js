const hasValuesFromArray = (set, arr) => {
    const subset = new Set(arr);

    for (const elem of subset) {
        if (!set.has(elem)) {
          return false;
        }
      }
      return true;
}

export default hasValuesFromArray;