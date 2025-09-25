import prompt from 'prompt-sync';
let input = prompt();


let firstElevatorFloor = 1;
let secondElevatorFloor = 8;
let thirdElevatorFloor = 0;

let calledFirst = false;
let calledSecond = false;
let calledThird = false;

console.log(`\nEm qual andar você se encontra?`);
let userFloor = input();

console.log(`\nChame um elevador:
    1           2           3
 Andar ${firstElevatorFloor}     Andar ${secondElevatorFloor}     Andar ${thirdElevatorFloor}`);

 let v = Number(input());


 if ( v == 1 || v == 2) {
    if (Math.abs(secondElevatorFloor - userFloor) < Math.abs(firstElevatorFloor - userFloor)) {
        if (secondElevatorFloor > userFloor) {
            console.log(`Segundo elevador: ${secondElevatorFloor}`)
            while (secondElevatorFloor > userFloor) {
                secondElevatorFloor--;
                await sleep(800);
                console.log(`Segundo elevador: ${secondElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (secondElevatorFloor < userFloor) {
            console.log(`Segundo elevador: ${secondElevatorFloor}`)
            while (secondElevatorFloor < userFloor) {
                secondElevatorFloor++;
                await sleep(800);
                console.log(`Segundo elevador: ${secondElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (secondElevatorFloor == userFloor) {
            console.log(`O segundo elevador está no seu andar!`)
        }
    }

    else if (Math.abs(secondElevatorFloor - userFloor) > Math.abs(firstElevatorFloor - userFloor)) {
        if (firstElevatorFloor > userFloor) {
            console.log(`Primeiro elevador: ${firstElevatorFloor}`);
            while (firstElevatorFloor > userFloor) {
                firstElevatorFloor--;
                await sleep(800);
                console.log(`Primeiro elevador: ${firstElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (firstElevatorFloor < userFloor) {
            console.log(`Primeiro elevador: ${firstElevatorFloor}`);
            while (firstElevatorFloor < userFloor) {
                firstElevatorFloor++;
                await sleep(800);
                console.log(`Primeiro elevador: ${firstElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (firstElevatorFloor == userFloor) {
            console.log(`O primeiro elevador está no seu andar!`);
        }
    }
 }

 else if (v == 3) {
    if (thirdElevatorFloor > userFloor) {
            console.log(`Terceiro elevador: ${thirdElevatorFloor}`)
            while (thirdElevatorFloor > userFloor) {
                thirdElevatorFloor--;
                await sleep(800);
                console.log(`Terceiro elevador: ${thirdElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (thirdElevatorFloor < userFloor) {
            console.log(`Terceiro elevador: ${thirdElevatorFloor}`)
            while (thirdElevatorFloor < userFloor) {
                thirdElevatorFloor++;
                await sleep(800);
                console.log(`Terceiro elevador: ${thirdElevatorFloor}`);
            }
            await sleep(300);
            console.log(`Seu elevador chegou!`);
        }
        else if (thirdElevatorFloor == userFloor) {
            console.log(`O terceiro elevador está no seu andar!`)
        }
 }

 function sleep(mili) {
  return new Promise((ok) => {
    setTimeout(ok, mili);
  })
}