---
layout: '../../../layouts/DocLayout.astro'
draft: false
order: 6
title: Aggregate Data Structures
---
# Aggregate Data Structures

<div class="index">

struct, record types

</div>

## The C `struct`

C has a facility for grouping data elements together in the form of a
"record", which is called a `struct`. A `struct` in C is sort of like a
class (in languages with classes), except that (1) all members of the
`struct` are public (i.e., there is no way to "hide" members), and (2)
there are no methods, only data members. Members of a `struct` are often
referred to as `fields`.

The following code defines a type called `struct fraction` that has two
integer fields named `numerator` and `denominator`. Note that a
semicolon is required after the final curly brace of the declaration, as
well as after the declaration of each field.

``` c
struct fraction {
    int numerator;
    int denominator;
};  // don't forget the semicolon!
```

Note that the full name of the new type is `struct fraction`, not just
`fraction`. Thus, if we want to create a new fraction variable, we
write:

``` c
struct fraction f1;
```

C uses the period (`.`) as the operator to access individual fields in a
`struct` (similar to the way that the period is used to access instance
variables in a Java or Python object). The following code assigns values
to the two fields of our new variable, then prints out the contents of
the `struct`:

``` c
f1.numerator = 3;
f1.denominator = 5;
printf("f1 is %d/%d\n", f1.numerator, f1.denominator);
```

<div class="index">

single: initializing structs double: struct; initializing

</div>

### Initializing `struct`s

A syntax similar to array initialization can be used to initialize
fields of a `struct`. For example, to declare and initialize a new
`struct fraction`, we could use the following:

``` c
struct fraction f2 = { 3, 5};
```

which would assign 3 to the `numerator` field and 5 to the `denominator`
field. An explicit field assignment syntax can also be used:

``` c
struct fraction f3 = { .denominator = 5, .numerator = 3 };
```

Note that using the *explicit* field assignment syntax, the field
assignments do not need to appear in the same order as the original
declaration of the `struct`.

<div class="sidebar">

**Annoyance: `==` does not work with `struct`s**

Unfortunately, the comparison for equality operator (`==`) does *not*
work with `struct`s. In fact, the code `if (f5 == f4)` will not even
compile. One way to address comparing structures is to write a function
to compare them, which we will discuss in the `functions` chapter.
Another way is to directly compare the contents of memory occupied by
two `struct`s, which we will discuss in the `pointers` chapter.

</div>

<div class="index">

single: = and structs double: =; struct

</div>

### Copying `struct`s

Conveniently, the `=` (assignment) operator can be used to copy the
contents of one struct into another. The copy is done in a
field-by-field manner:

``` c
struct fraction f4 = { 2, 7 };
struct fraction f5 = f4;  // f5 now has identical contents as f4
```

There is another way to copy `struct`s (using the built-in `memcpy`
function), but since this method requires use of "pointers" we will
defer discussion until the `pointers` chapter.

<div class="index">

typedef, type aliases

</div>

### Arrays of `struct`s and type aliases (`typedef`)

It is perfectly valid, and quite common, to have arrays of records. For
example, we might want to have a whole series of fractions stored in an
array, as follows:

``` c
struct fraction numbers[100];
numbers[0].numerator = 22;       // set the 0th struct fraction 
numbers[0].denominator = 7;
```

The declaration on line 1, above, is a little bit of a mouthful, but
reading from right-to-left can help: "an array of 100 elements called
numbers, where each element contains a struct fraction". To help
simplify reading and writing type complex declarations, C contains a
mechanism for creating *type aliases*, using the keyword `typedef`. The
syntax goes `typedef <original type> <type alias>`, as follows:

``` c
typedef struct fraction fraction_t;
fraction_t numbers2[100];
```

Line 1 defines a type alias for `struct fraction` called `fraction_t` (a
"fraction type"). Now, `fraction_t` can be used where ever we might
originally have used `struct fraction`. On line 2, an array of these
fraction structures is created, which is a tiny bit easier to read than
the first array declaration.

<div class="index">

double: struct; memory alignment double: struct; compiler-inserted
padding double: struct; sizeof

</div>

### Using `sizeof` with a `struct` and memory layout of a `struct`

The built-in `sizeof` function works quite happily with a `struct`. It
returns the number of bytes occupied by the struct in memory. As with
other data types, either a variable name or a type name may be used as
the argument to `sizeof`. For example, consider the following code:

``` c
struct fraction f6 = { 1, 2};
printf("Size of f6: %lu\n", sizeof(f6));
printf("Size of struct fraction: %lu\n", sizeof(struct fraction));
```

On almost all machines today, the output of the above code will be:

    Size of f6: 8
    Size of struct fraction: 8

since the size of a single int is almost always 4 bytes.

No surprises there, right? Let's look at the following program, which
defines a `struct student` containing a name, class year, and age.

```c
#include <stdio.h>
#include <stdlib.h>

struct student {
    char name[32];
    short class_year;
    char age;
};

int main() {
    struct student s = { "H. Sommers", 2026, 5 };
    printf("An example student: %s, %d, %d\n", s.name, s.class_year, s.age);
    printf("Size of a student struct: %lu\n", sizeof(struct student));
    return EXIT_SUCCESS;
}
```

Compiling and running this code gives this output:

    An example student: H. Sommers, 2026, 5
    Size of a student struct: 36

Consider the size reported by the program, 36, and remember that a
`short` is 2 bytes and `char` is 1 byte. Last time I checked,
\(32 + 2 + 1 = 35\)\! What's happening?\!

When the compiler allocates memory on the stack or the heap for a
`struct`, it may introduce "padding" bytes to ensure that the entire
`struct` fits within an even multiple of machine words. If the word size
is 4 bytes, then the compiler will silently add `sizeof(struct) % 4`
bytes as "padding" to the end of the struct\[1\]. So, in the `struct
student` definition starting on line 3, above, there is one extra byte
added by the compiler to make the entire structure occupy a
"word-aligned" number of bytes. A picture of how an actual `struct
student` looks in memory is thus like the following:

![An struct that has "padding" inserted by the
compiler.](figures/structalign.*)

The padding inserted by the compiler is not usually something one needs
to pay close attention to, but in certain circumstances it *does* matter
and it's good to be aware of this behavior.

**Exercises**

1.  Assume that you have a text file with a series of student names,
    class years, and ages listed, like the following:
    
        Alice Z., 2020, 17
        Bob Y., 2019, 19
        Chelsea X., 2020, 18
        Draco M., 2019, 20
    
    Write a program that reads the text file contents from standard
    input (hint below) and stores each student in a C struct in an
    array. After you've loaded the students, print each of them out on a
    separate line, and print the average age (as a floating point
    number) at the end. (To format a floating point number for output
    using `printf`, you can use the `%f` placeholder.)
    
    You can assume any reasonable upper-bound for the number of
    characters in a name, and any reasonable upper-bound for the number
    of students. That is, you should *overallocate* space required for
    the name and number of students, within reason. An upper bound for
    student name might be 64, and an upper bound for the number of
    students might be 100.
    
    You can use the `fgets` call to read data from standard input (just
    as you've already done for keyboard input), and use "shell
    redirection" to cause the contents of a text file to be treated as
    stdin to your program. Say that you've compiled the code to an
    executable called `sreader` and the student data is in the text file
    `students.txt`, you could do the redirection trick by typing:
    
        $ ./sreader < students.txt

2.  Extend the above program to do the following. After all the student
    records are loaded, repeatedly ask for a student first name until
    the special string `DONE` is entered. For each valid name entered,
    search for the name in the array of records and print the values
    within the relevant records found (note that more than one student
    may match the query). If no student is found matching the name,
    print a message to that effect. You should allow the search (name)
    entered to be compared in a case-insensitive way. For example, the
    string "Bob" should match the 2nd record shown above. As another
    example, the string "E" should match both "Alice Z." and "Chelsea
    X." (both have "e"'s, but the other two names do not). Consider
    using the built-in `strcasestr` function\[2\] to compare strings.

3.  Write a program that asks for values for two fractions (numerator
    and denominator for each), and computes and prints the sum of the
    fractions. Store the result of the sum in a new `struct fraction`
    prior to printing the sum.

**Footnotes**

1.  <http://en.wikipedia.org/wiki/Data_structure_alignment>

2.  <http://man7.org/linux/man-pages/man3/strstr.3.html>
