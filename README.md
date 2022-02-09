# debounce

Simple debounce factory function that creates an async version of a passed function which executes after a given delay. Built with typescript and promises.

## Installation

```bash
npm i @merry-solutions/debounce
```

## Usage

Simply create a debounced version of any function. Passing a function you get back a tuple consisting of a debounced version of the passed function and an additional function that can cancel the debounced version's pending execution at any time.

Running debounced function:

```typescript
import { debounce } from '@merry-solutions/debounce';

function saySomething(): void {
  console.log('Something');
}

const [debouncedSaySomething] = debounce(saySomething, 100);

// Is going to say something only once
for (let x = 0; x < 99; x++) {
  debouncedSaySomething();
}
```

Cancelling debounced function before execution:

```typescript
import { debounce } from '@merry-solutions/debounce';

function saySomething(): void {
  console.log('Something');
}

const [debouncedSaySomething, cancel] = debounce(saySomething, 100);

// Won't say anything
for (let x = 0; x < 99; x++) {
  debouncedSaySomething();
}
cancel();
```

Simple as that :)
