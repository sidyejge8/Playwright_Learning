let tests = ["Login","checkout","search"];

for(let i=0; i < tests.length; i++)
{
    console.log(i, tests[i]);
}

//for...of
for (let test of tests)
{
    console.log(test);
}

//for each
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
})