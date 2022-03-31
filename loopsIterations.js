// level {1/2/3}

//        1
//      1 2 1
//    1 2 3 2 1
//  1 2 3 4 3 2 1




function pyramid(n) {

    for (let i = 1; i <= n; i++) {

        let str = ' '.repeat(n - i);

        let str2 = `${i}`.repeat(i * 2 - 1)

        console.log(str + str2 + str);

    }

}

pyramid(4);


