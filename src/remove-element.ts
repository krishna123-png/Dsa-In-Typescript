function removeElement(nums: number[], val: number): number {
    if (nums.length < 0 || nums.length > 100) {
        throw new Error("Boundary conditions not met");
    }
    if (nums.some((num) => num < 0 || num > 50)) {
        throw new Error("Boundary condition not met");
    }
    if (val < 0 || val > 100) {
        throw new Error("Boundary condition not met");
    }
    let k = nums.length - 1;
    let i = 0;
    while (i < k) {
        if (nums[i] === val) {
            let temp = nums[k];
            nums[k] = nums[i]!;
            nums[i] = temp!;
            k = k - 1;
        }
        else {
            i = i + 1;
        }
    }
    return nums[i] === val ? i : i + 1;
};