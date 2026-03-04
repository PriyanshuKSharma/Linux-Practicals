# Arithmetic Operations
A mathematical expression containing +,-,*,^, / and parenthesis will be provided. Read in the expression, then evaluate it. Display the result rounded to  decimal places.

Constraints

`All numeric values are <= 999.`

### Sample Input

```
Sample Input 1

5+50*3/20 + (19*2)/7
```

```
Sample Input 2

-105+50*3/20 + (19^2)/7
```

```
Sample Input 3

(-105.5*7+50*3)/20 + (19^2)/7
```

### Sample Output

```
Sample Output 1

17.929
```

```
Sample Output 2

-45.929
```

```
Sample Output 3

22.146
 ```


## Solution

```sh
#!/bin/bash

# 1. Capture the entire expression as a string
read expression

# 2. Use 'bc -l' to calculate and 'printf' to format
# We use $(...) to run the calculation first, then pass it to printf
printf "%.3f\n" $(echo "$expression" | bc -l)
```

### Explanation
#### Why we use these specific tools:

#### 1. The `read` command

In HackerRank, the input is provided through "Standard Input" (STDIN). `read expression` takes whatever line they give you (like `5+5*3`) and saves it into a variable named `expression`.

#### 2. The `bc -l` (Basic Calculator)

Bash is famous for only knowing whole numbers ($5 / 2 = 2$). Since your challenge requires decimals, we "pipe" (`|`) the string into `bc`.

* The `-l` flag is the "magic" part—it tells `bc` to use its math library, which handles decimals and the exponent symbol (`^`).

#### 3. The `printf` "Rounding"

HackerRank doesn't just want the answer; it wants it **rounded** to exactly 3 decimal places.

* **`%.3f`**: The `f` stands for "floating point" (decimal), and `.3` tells Bash to show exactly three numbers after the dot. If the result is `17.9285`, `printf` automatically rounds it up to `17.929`.

---

### Common Beginner Pitfalls to Avoid:

1. **Trying `echo $((expression))`**: This will fail because `$((...))` only handles integers and will crash if it sees a decimal point or a `^`.
2. **Missing the `bc` installation**: If you're testing this on your own **Ubuntu/WSL** and it says `bc: command not found`, just run `sudo apt install bc`.
3. **Spaces in variables**: In Bash, `VAR = 5` (with spaces) will fail. It must be `VAR=5`.

