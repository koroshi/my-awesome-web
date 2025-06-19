# 快速排序 TypeScript 实现及面试注意点

## 一、TypeScript 实现

```typescript
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[0]; // 选择第一个元素为基准值
  const left = [];
  const right = [];

  // 分区（partition）操作
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 递归排序左右子数组并合并结果
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 示例用法
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
//第一次之后的顺序
[1,2,1,3,6,8,10]

console.log(quickSort(unsortedArray)); // 输出: [1, 1, 2, 3, 6, 8, 10]
```

## 二、面试注意点

### 1. 核心思想（分治法）
- **分解**：选择基准值（pivot），将数组分为两部分，左半部分 ≤ pivot，右半部分 > pivot
- **递归**：分别对左右两部分递归排序
- **合并**：左半部分 + pivot + 右半部分

### 2. 基准值选择策略
- **首/尾元素**：简单但可能导致最坏情况（如已排序数组）
- **随机元素**：平均性能更优，降低最坏情况概率
- **三数取中**：选择首、中、尾三个元素的中间值，减少最坏情况发生

### 3. 时间复杂度分析
- **最好/平均**：O(n log n)（每次分区均匀）
- **最坏**：O(n²)（如基准值选最大/最小值，且数组已排序）
- **优化**：通过随机基准值或三数取中避免最坏情况

### 4. 空间复杂度
- **递归栈空间**：平均 O(log n)（递归深度），最坏 O(n)
- **原地排序**：若通过交换元素实现分区（如 Lomuto 或 Hoare 分区），空间复杂度可降为 O(1)

### 5. 原地排序实现（重要）

```typescript
function quickSortInPlace(arr: number[], left = 0, right = arr.length - 1): void {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
  }
}

function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right]; // 选择最后一个元素为基准值
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换元素
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}
```

### 6. 稳定性
- **不稳定排序**：相同元素的相对顺序可能改变（如基准值与其他相同元素交换）

### 7. 适用场景
- 数据量大且随机分布时效率高
- 不适用于对稳定性要求高的场景

## 三、常见问题

### 1. 为什么快速排序通常比归并排序更快？
- 快速排序的常数因子更小，且原地排序（无需额外空间）

### 2. 如何优化快速排序？
- 随机基准值、三数取中、小数组用插入排序、双轴快排（Dual-Pivot QuickSort）

### 3. 什么情况下快速排序会退化？
- 数组已排序且基准值选首/尾元素时，递归树退化为链表

## 四、变种算法
- **双轴快排**（Dual-Pivot QuickSort）：使用两个基准值，将数组分为三部分，性能更优（Java 的 `Arrays.sort()` 采用）
- **三路快排**（3-Way QuickSort）：将数组分为 <、=、> 基准值三部分，适合包含大量重复元素的数组