nums:
    for (var i = 2; i < 100; i++) {
        for (var k = 2; k < i; k++) {
            if (i % k == 0) continue nums;
        }
        console.log(i + ". Делители этого числа 1 и " + k);
}