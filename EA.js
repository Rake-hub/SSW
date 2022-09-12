examenAlvaro([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);

function examenAlvaro(nums, objetivo) {


    var resul = new Array(2);


    for (var x = 0; x < nums.length; x++) {

        for (var j = 0; j < nums.length; j++) {

            if (nums[x] + nums[j] == objetivo) {

                resul[1] = nums[j];
                resul[0] = nums[x];
                console.log(resul);
            }
        }

    }

}