export const steps = () => {
  interface step {
    start:number,
    end:number
  }
  // STEP1
  const step1:step = {
    start: 0,
    end: 9
  }
  // STEP2
  const step2: step = {
    start: 10,
    end: 19
  }
  // STEP3
  const step3: step = {
    start: 20,
    end: 27
  }
  return {
    step1,
    step2,
    step3
  }
}
