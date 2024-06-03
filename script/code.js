function addition(...numbers) {
     console.log(numbers.reduce((c, n) => c + n))
}

addition( 1, 2, 4, 2, 3, 1)