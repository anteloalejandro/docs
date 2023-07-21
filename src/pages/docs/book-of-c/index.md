---
layout: '../../../layouts/DocLayout.astro'
draft: false
order: -1
title: The Book of C
---
# The Book of C

This book is also available in [PDF form](cbook.pdf).

![New Harbor, Maine, USA. Photo by J. Sommers.](figures/seaimg.jpg)

<div class="todolist">

</div>

<h4>Preface</h4>

Get ready to learn one of the most influential programming languages
ever developed. If you know some Java, you'll find C's syntax familiar
(Java's syntax is based on C) and many of the same control structures.
That familiarity can be deceptive, though. C is rather unforgiving and
will allow you (nay, give you the weapon) to shoot yourself in the foot.
On the other hand, you'll develop a much better understanding of
computer systems as your knowledge of C grows. Have fun, and good luck\!

This book is loosely based on the "Essential C" document written by Nick
Parlante at Stanford University. The original document is available at
<http://cslibrary.stanford.edu/101/>. The Essential C document was last
updated in 2003, which is one reason why this document exists.
Programming languages and compilers change, and I wanted to take the
good work that Nick had done and make several updates to modernize the
text.

The notice reproduced below is copied from Essential C:

> **Stanford CS Education Library**. This is document \#101, Essential
> C, in the Stanford CS Education Library. This and other educational
> materials are available for free at <http://cslibrary.stanford.edu/>.
> This article is free to be used, reproduced, excerpted, retransmitted,
> or sold so long as this notice is clearly reproduced at its beginning.

<h3>Contents:</h3>

1. [Introduction: The C Language](book-of-c/intro)

2. [Getting your feet wet in the C](book-of-c/tutorial)
    1. [Hello, somebody](book-of-c/tutorial#hello-somebody)
    2. [Hello, clang](book-of-c/tutorial#hello-clang)
3. [Basic Types and Operators](book-of-c/basictypes)
    1. [Integer types](book-of-c/basictypes#integer-types)
    2. [Floating point types](book-of-c/basictypes#floating-point-types)
    3. [Boolean type](book-of-c/basictypes#boolean-type)
    4. [Basic syntactic elements](book-of-c/basictypes#basic-syntactic-elements)
4. [Control Structures](book-of-c/control)
    1. [if Statement](book-of-c/control#if-statement)
    2. [The conditional expression (ternary operator)](book-of-c/control#the-conditional-expression-ternary-operator)
    3. [switch statement](book-of-c/control#switch-statement)
    4. [while loop](book-of-c/control#while-loop)
    5. [do-while loop](book-of-c/control#do-while-loop)
    6. [for loop](book-of-c/controll#for-loop)
5. [Arrays and Strings](book-of-c/arraysstrings)
    1. [Arrays](book-of-c/arraysstrings#arrays)
    2. [Multidimensional Arrays](book-of-c/arraysstrings#multidimensional-arrays)
    3. [C Strings](book-of-c/arraysstrings#c-strings)
6. [Aggregate Data Structures](boo-of-c/structs)
    1. [The C struct](book-of-c/structs#the-c-struct)
7. [Functions](book-of-c3/functions)
    1. [Function syntax](book-of-c/functions#function-syntax)
    2. [Data types for parameters and return values](book-of-c/functions#data-types-for-parameters-and-return-values)
    3. [Storage classes, the stack and the heap](book-of-c/functions#storage-classes-the-stack-and-the-heap)
8. [Pointers and more arrays](book-of-c/pointersarrays)
    1. [Pointers](book-of-c/pointersarrays#pointers)
    2. [Advanced C Arrays and Pointer Arithmetic](book-of-c/pointersarrays#advanced-c-arrays-and-pointer-arithmetic)
    3. [Dynamic memory allocation](book-of-c/pointersarrays#dynamic-memory-allocation)
9. [Program structure and compilation](book-of-c/programstructure)
    1. [The compilation process](book-of-c/programstructure#the-compilation-process)
    2. [Invariant testing and assert](book-of-c/programstructure#invariant-testings-and-assert)
10. [C Standard Library Functions](book-of-c/stdlib)
    1. [Precedence and Associativity](book-of-c/stdlib#precedence-and-associativity)
    2. [Standard Library Functions](book-of-c/stdlib#standard-library-functions)
    3. [stdio.h](book-of-c/stdlib#stdioh)
    4. [ctype.h](book-of-c/stdlib#ctypeh)
    5. [string.h](book-of-c/stdlib#stringh)
    6. [stdlib.h](book-of-c/stdlib#stdlibh)


</div>

# Thanks

Thanks to my COSC 301 students from Fall 2015 and 2016 for test-driving
this text and for providing useful feedback. Thanks also to Aaron
Gember-Jacobson, Chris Nevison, and Yasoob Khalid for pointing out
various typos (and in Yasoob's case, the pull requests).

If you find any errors or typos in the book, or wish to make a
suggestion for improvement, please file a bug report and/or make a pull
request at <https://github.com/jsommers/cbook/issues>.

# Copyright

This work is licensed under a Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International License:
<http://creativecommons.org/licenses/by-nc-sa/4.0/>
