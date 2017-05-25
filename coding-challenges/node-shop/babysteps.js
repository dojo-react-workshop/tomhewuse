/**
 * Created by Hew4803 on 5/24/17.
 */

var sum = 0;
for (let i=2; i<process.argv.length;i++){
    sum+=Number(process.argv[i]);
}
console.log(sum);