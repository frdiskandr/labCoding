let INPUT = ["xc", "dz", "bbb", "dz"];
let QUERY = ["bbb", "ac", "dz"];

function CountSameStr(input, query) {
    let output = [];

    for (let i = 0; i < query.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                count++;
            }
      }
      output.push(count);
  }
  console.log(output);
}

CountSameStr(INPUT, QUERY);
