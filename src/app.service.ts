import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(protected name: string) {}

  getHello(): number {
    const my_list = [1, 3, 5, 7, 9];
    for (const n of range(0, 100, 5)) {
      console.log('!!! range', n);
    }

    return binary_search(my_list, -1);
  }
}

for (const n of range(0, 100, 5)) {
  console.log('!!! range', n);
}

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return {
        done: true,
        value: end,
      };
    },
  };
}

function binary_search<T>(list: T[], item: T): number | null {
  let low = 0;
  let high: number = list.length - 1;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);
    const guess: T = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}
