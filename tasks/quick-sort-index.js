const quickSortIndex = (arr, left, right) => {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        quickSortIndex(arr, left, partitionIndex - 1);
        quickSortIndex(arr, partitionIndex + 1, right);
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}


console.log(quickSortIndex([5, 3, 2, 4], 0, 3));