const getPermutatons = (arr) => {
    const generatePermutations = (index, perm, visited, values, all) => {
        if (index === values.length) {
            all.push([...perm]);
            return;
        }

        for (const value of values) {
            //check for visited and continue 
            if (visited[value]) {
                continue;
            }

            perm[index] = value;
            //mark value as visited
            visited[value] = true;
            generatePermutations(index + 1, perm, visited, values, all)
            // unmark value as visited
            visited[value] = false;
        }
    };

    const permutations = [];

    generatePermutations(0, [], {}, arr, permutations);

    return permutations;
};

getPermutatons([1, 2, 3])
    .forEach((permutations) => console.log(permutations));