import { asyncScheduler, range, subscribeOn } from 'rxjs';

export function run() {
  const iterations = 1e8;

  // First using performance with while
  console.time('LoopWhile');
  function runWhileLoop() {
    let i = 0;
    while (i < iterations) {
      dispatch(i++);
    }
  }
  runWhileLoop();
  console.timeEnd('LoopWhile');

  // Second timer with for
  console.time('LoopFor');
  function runForLoop() {
    for (let j = 0; j < iterations; j++) {
      dispatch(j);
    }
  }
  runForLoop();
  console.timeEnd('LoopFor');

  // Third timer whit rx range
  console.time('Range');
  function runRange() {
    range(0, iterations)
      .pipe(subscribeOn(asyncScheduler))
      .subscribe({
        next: (e) => dispatch(e),
        complete: () => {
          console.timeEnd('Range');
        },
      });
  }
  runRange();

  // Fourth timer whit for loop
  // console.time('LoopFor2');
  // function runForLoop2() {
  //   for (let j = 0; j < iterations; j++) {
  //     dispatch(j);
  //   }
  // }
  //
  // runForLoop2();
  // console.timeEnd('LoopFor2');

  console.log('Finished');

  function dispatch(_: number) {
    // Makes some compute operation
  }
}
