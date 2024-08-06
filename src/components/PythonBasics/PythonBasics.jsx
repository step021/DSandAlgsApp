import { PythonBasicsContainer, PythonBasicsContent, PythonBasicsHeader, PythonBasicsSection, Bullet, EditorContainer, Ptext, Table, Thead, Tbody, Subsection, TH, TD, TR} from './PythonBasicsStyle';
import SideMenu from '../SideMenu/SideMenu';
import React from 'react';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

function PythonBasic() {


  return (
    <main>
      <PythonBasicsContainer id='Python'>
        <SideMenu />
        <PythonBasicsContent >
          <PythonBasicsHeader>Python Basics</PythonBasicsHeader>
          <PythonBasicsSection>
            <Subsection>What is Python?</Subsection>
            <Ptext>Python is a high-level, interpreted, interactive and object-oriented language.</Ptext>
          </PythonBasicsSection>
          <PythonBasicsSection>
            <Subsection>Python Identifiers</Subsection>
            <Ptext>An identifier is a name given to entities like class, functions, variables, etc. It helps to differentiate one entity from another.</Ptext>
            <Ptext>Rules for writing identifiers:</Ptext>
            <Bullet>
              <li>Identifiers can be a combination of letters in lowercase (a to z) or uppercase (A to Z) or digits (0 to 9) or an underscore (_).</li>
              <li>An identifier cannot start with a digit.</li>
              <li>Keywords cannot be used as identifiers.</li>
              <li>We cannot use special symbols like !, @, #, $, % etc. in our identifier.</li>
              <li>An identifier can be of any length.</li>
            </Bullet>
            <Ptext>An identifier is a associated with the memory address of the object it refers to.</Ptext>
            <Ptext>Python is dynamically typed(no advanced declaration of identifier)</Ptext>
            <Ptext> Aliasing: Assigning 2nd identifier to existing object</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Identifier associated with object
  a = 10
  temp = 90
  name = "John"
  original = a #aliasing`}
              />
          </EditorContainer>
          <PythonBasicsSection>
          <Subsection>Instantiation and Calling Methods</Subsection>
          <Ptext>Instantiation is the creation of an instance of a class. An instance is a specific object created from a particular class.</Ptext>
          <Ptext>Calling a method is the process of executing a method that is defined in a class.</Ptext>
          <Ptext>Methods are functions defined inside the body of a class. They are used to define the behaviors of an object.</Ptext>
          <Ptext>Accessors return info on the state of an object</Ptext>
          <Ptext>Mutators change the state of an object</Ptext>
          <Ptext>Methods are called using the dot operator.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`data.sort() #Calling a method
data.append(10) #Calling a method
#mutator
def set_name(self, name):
  self.name = name
#accessor
def get_name(self):
  return self.name`}/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Built In Classes</Subsection>
            <Ptext>Immutable: if each object of the class has a fixed value when initialized</Ptext>
            <Ptext>Python has several built-in classes that are used to create objects. Some of the most common built-in classes are:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Class</TH>
                <TH>Description</TH>
                <TH>Immutable</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>bool</TD>
                <TD>Boolean</TD>
                <TD>Yes</TD>
              </TR>
              <TR>
                <TD>int</TD>
                <TD>Integer</TD>
                <TD>Yes</TD>
              </TR>
              <TR>
                <TD>float</TD>
                <TD>Floating point number</TD>
                <TD>Yes</TD>
              </TR>
              <TR>
                <TD>str</TD>
                <TD>Char string</TD>
                <TD>Yes</TD>
              </TR>
              <TR>
                <TD>list</TD>
                <TD>Mutable sequence of objects</TD>
                <TD>No</TD>
              </TR>
              <TR>
                <TD>tuple</TD>
                <TD>Immutable sequence of objects</TD>
                <TD>Yes</TD>
              </TR>
              <TR>
                <TD>set</TD>
                <TD>Unordered set of unique objects</TD>
                <TD>No</TD>
              </TR>
              <TR>
                <TD>dict</TD>
                <TD>Unordered set of key-value pairs</TD>
                <TD>No</TD>
              </TR>
              <TR>
                <TD>Frozenset</TD>
                <TD>Immutable set of unique objects</TD>
                <TD>Yes</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>List</Subsection>
            <Ptext>Stores sequence of objects</Ptext>
            <Ptext>Referencial Structure: sequence of references to objects</Ptext>
            <Ptext>Mutable</Ptext>
            <Ptext>Array based and zero-indexed</Ptext>
            <Ptext>Accepts iterable parameter</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`data = [1, 2, 3, 4, 5] #list of integers
data = []#empty list
data = list()#empty list
data = list(range(10))#list of 10 elements
data = list("hello")#list of characters ['h', 'e', 'l', 'l', 'o']`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Tuple</Subsection>
            <Ptext>Stores sequence of objects</Ptext>
            <Ptext>Immutable</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor

                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`data = (1, 2, 3, 4, 5) #tuple of integers
data = ()#empty tuple
data = tuple()#empty tuple
data = tuple(1,)#tuple of single element
data = tuple(range(10))#tuple of 10 elements(0 to 9)
data = tuple("hello")#tuple of characters ('h', 'e', 'l', 'l', 'o')`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Set</Subsection>
            <Ptext>Collection of unique elements, similar to mathematical set</Ptext>
            <Ptext>Used to check if element is in a set</Ptext>
            <Ptext>Only immutable objects can be added </Ptext>
            <Ptext>Mutable</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`data = {1, 2, 3, 4, 5} #set of integers
data = set()#empty set
data = set(range(10))#set of 10 elements
data = set("hello")#set of characters {'h', 'e', 'l', 'o'}`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Dictionary</Subsection>
            <Ptext>Mapping from a set of distinct keys to associated values.</Ptext>
            <Ptext>Mutable</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Maps 1 to "one", 2 to "two", 3 to "three"
data = {1: "one", 2: "two", 3: "three"} #dictionary of integers and strings
data = {}#empty dictionary
data = dict()#empty dictionary
#Maps "one" to 1, "two" to 2, "three" to 3
data = dict(one=1, two=2, three=3)#dictionary of strings and integers
data = dict(zip(range(1, 4), ["one", "two", "three"]))#dictionary of integers and strings`}
/>
          </EditorContainer>
        </PythonBasicsContent>
      </PythonBasicsContainer>
      <PythonBasicsContainer id='EO'>
        <PythonBasicsContent>
          <PythonBasicsSection>
          <PythonBasicsHeader>Expressions and Operators</PythonBasicsHeader>
          <Subsection>Expressions and Operators Intro</Subsection>
          <Ptext>In Python, an expression is a combination of values, variables, operators, and function calls that can be evaluated to produce a result. Expressions are the fundamental building blocks in Python programming and can include literals, identifiers, function invocations, and operators. When Python encounters an expression, it evaluates it and returns a value.</Ptext>
          <Ptext>Operators are special symbols in Python that carry out arithmetic or logical computation. The value that the operator operates on is called the operand.</Ptext>
          </PythonBasicsSection>
          <PythonBasicsSection>
            <Subsection>Logical Operators</Subsection>
            <Ptext>Logical operators are used to combine conditional statements.</Ptext>
            <Ptext>Short circuit memory: They dont evaluate second operand if the result can be determined from the first. </Ptext>
            <Ptext>Python has 3 logical operators:</Ptext>
          </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
              </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>and</TD>
                  <TD>Returns True if both statements are true</TD>
                  <TD>x &lt; 5 and x &lt; 10</TD>
                </TR>
                <TR>
                  <TD>or</TD>
                  <TD>Returns True if one of the statements is true</TD>
                  <TD>x &lt; 5 or x &lt; 4</TD>
                </TR>
                <TR>
                  <TD>not</TD>
                  <TD>Reverse the result, returns False if the result is true</TD>
                  <TD>not(x &lt; 5 and x &lt; 10)</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Equality Operators</Subsection>
              <Ptext>Equality operators are used to compare two values.</Ptext>
              <Ptext>Python has 4 equality operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>==</TD>
                  <TD>Returns True if both operands are equal</TD>
                  <TD>x == y</TD>
                </TR>
                <TR>
                  <TD>!=</TD>
                  <TD>Returns True if both operands are not equal</TD>
                  <TD>x != y</TD>
                </TR>
                <TR>
                  <TD>is</TD>
                  <TD>Returns True if both operands are identical(x and y aliases to same obj)</TD>
                  <TD>x is y</TD>
                </TR>
                <TR>
                  <TD>is not</TD>
                  <TD>Returns True if both operands are not identical(x and y not aliases to same obj)</TD>
                  <TD>x is not y</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Comparison Operators</Subsection>
              <Ptext>Comparison operators are used to compare two values.</Ptext>
              <Ptext>Python has 4 comparison operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>&gt;</TD>
                  <TD>Returns True if the left operand is greater than the right operand</TD>
                  <TD>x &gt; y</TD>
                </TR>
                <TR>
                  <TD>&lt;</TD>
                  <TD>Returns True if the left operand is less than the right operand</TD>
                  <TD>x &lt; y</TD>
                </TR>
                <TR>
                  <TD>&gt;=</TD>
                  <TD>Returns True if the left operand is greater than or equal to the right operand</TD>
                  <TD>x &gt;= y</TD>
                </TR>
                <TR>
                  <TD>&lt;=</TD>
                  <TD>Returns True if the left operand is less than or equal to the right operand</TD>
                  <TD>x &lt;= y</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Arithmetic Operators</Subsection>
              <Ptext>Arithmetic operators are used to perform mathematical operations.</Ptext>
              <Ptext>Python has 7 arithmetic operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>+</TD>
                  <TD>Addition</TD>
                  <TD>x + y</TD>
                </TR>
                <TR>
                  <TD>-</TD>
                  <TD>Subtraction</TD>
                  <TD>x - y</TD>
                </TR>
                <TR>
                  <TD>*</TD>
                  <TD>Multiplication</TD>
                  <TD>x * y</TD>
                </TR>
                <TR>
                  <TD>/</TD>
                  <TD>Division</TD>
                  <TD>x / y</TD>
                </TR>
                <TR>
                  <TD>%</TD>
                  <TD>Modulus</TD>
                  <TD>x % y</TD>
                </TR>
                <TR>
                  <TD>**</TD>
                  <TD>Exponentiation</TD>
                  <TD>x ** y</TD>
                </TR>
                <TR>
                  <TD>//</TD>
                  <TD>Integer Division(floor of quotient)</TD>
                  <TD>x // y</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Sequence Operators</Subsection>
              <Ptext>Sequence operators are used to perform operations on sequences like strings, lists, and tuples.</Ptext>
              <Ptext>Python has multiple sequence operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>+</TD>
                  <TD>Concatenation</TD>
                  <TD>s + t</TD>
                </TR>
                <TR>
                  <TD>*</TD>
                  <TD>Repetition</TD>
                  <TD>s * k (s + s + s ...(k times))</TD>
                </TR>
                <TR>
                  <TD>in</TD>
                  <TD>Containment Check</TD>
                  <TD>val in s</TD>
                </TR>
                <TR>
                  <TD>not in</TD>
                  <TD>Non-containment Check</TD>
                  <TD>val not in s</TD>
                </TR>
                <TR>
                  <TD>s[j]</TD>
                  <TD>Element at index j</TD>
                  <TD>s[j]</TD>
                </TR>
                <TR>
                  <TD>s[start:stop]</TD>
                  <TD>Slice including indices [start,stop)</TD>
                  <TD>s[i:j]</TD>
                </TR>
                <TR>
                  <TD>s[start:stop:step]</TD>
                  <TD>Slice including indices [start,stop) with step</TD>
                  <TD>s[i:j:k]</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Bitwise Operators</Subsection>
              <Ptext>Bitwise operators are used to perform bitwise operations on integers.</Ptext>
              <Ptext>Python has 6 bitwise operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>&</TD>
                  <TD>Bitwise AND</TD>
                  <TD>x & y</TD>
                </TR>
                <TR>
                  <TD>|</TD>
                  <TD>Bitwise OR</TD>
                  <TD>x | y</TD>
                </TR>
                <TR>
                  <TD>^</TD>
                  <TD>Bitwise XOR</TD>
                  <TD>x ^ y</TD>
                </TR>
                <TR>
                  <TD>~</TD>
                  <TD>Bitwise NOT</TD>
                  <TD>~x</TD>
                </TR>
                <TR>
                  <TD>&lt;&lt;</TD>
                  <TD>Bitwise Left Shift</TD>
                  <TD>x &lt;&lt; y</TD>
                </TR>
                <TR>
                  <TD>&gt;&gt;</TD>
                  <TD>Bitwise Right Shift</TD>
                  <TD>x &gt;&gt; y</TD>
                </TR>
              </Tbody>
            </Table>
            <PythonBasicsSection>
              <Subsection>Set and Dict Operators</Subsection>
              <Ptext>Set and dictionary operators are used to perform operations on sets and dictionaries.</Ptext>
              <Ptext>Python has many set and dictionary operators:</Ptext>
            </PythonBasicsSection>
            <Table>
              <Thead>
                <TR>
                  <TH>Operator</TH>
                  <TH>Description</TH>
                  <TH>Example</TH>
                </TR>
              </Thead>
              <Tbody>
                <TR>
                  <TD>in</TD>
                  <TD>Containment</TD>
                  <TD>key in s</TD>
                </TR>
                <TR>
                  <TD>not in</TD>
                  <TD>Non-containment</TD>
                  <TD>key not in s</TD>
                </TR>
                <TR>
                  <TD>==</TD>
                  <TD>Equality</TD>
                  <TD>s1 == s2</TD>
                </TR>
                <TR>
                  <TD>!=</TD>
                  <TD>Inequality</TD>
                  <TD>s1 != s2</TD>
                </TR>
                <TR>
                  <TD>&gt;=</TD>
                  <TD>s1 superset of s2</TD>
                  <TD>s1 &gt;= s2</TD>
                </TR>
                <TR>
                  <TD>&gt;</TD>
                  <TD>s1 proper superset of s2</TD>
                  <TD>s1 &gt; s2</TD>
                </TR>
                <TR>
                  <TD>&lt;=</TD>
                  <TD>s1 subset of s2</TD>
                  <TD>s1 &lt;= s2</TD>
                </TR>
                <TR>
                  <TD>&lt;</TD>
                  <TD>s1 proper subset of s2</TD>
                  <TD>s1 &lt; s2</TD>
                </TR>
                <TR>
                  <TD>&</TD>
                  <TD>Intersection</TD>
                  <TD>s1 & s2</TD>
                </TR>
                <TR>
                  <TD>|</TD>
                  <TD>Union</TD>
                  <TD>s1 | s2</TD>
                </TR>
                <TR>
                  <TD>-</TD>
                  <TD>Set of elem in s1 but not in s2</TD>
                  <TD>s1 - s2</TD>
                </TR>
                <TR>
                  <TD>^</TD>
                  <TD>Set of elem in just one of s1 or s2</TD>
                  <TD>s1 ^ s2</TD>
                </TR>
                <TR>
                  <TD>d[key] = value</TD>
                  <TD>Set key to value in dictionary d</TD>
                  <TD>d[key] = value</TD>
                </TR>
                <TR>
                  <TD>del d[key]</TD>
                  <TD>Delete key from dictionary d</TD>
                  <TD>del d[key]</TD>
                </TR>
              </Tbody>
            </Table>
        </PythonBasicsContent>
      </PythonBasicsContainer>













      <PythonBasicsContainer id='Loops'>
        <PythonBasicsContent>
          <PythonBasicsHeader>Loops and Conditionals</PythonBasicsHeader>
          <PythonBasicsSection>
            <Subsection>Loops</Subsection>
            <Ptext>Loops are used to execute a block of code repeatedly until a certain condition is met.</Ptext>
            <Ptext>Python has two types of loops:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Loop</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>for</TD>
                <TD>Iterates over a sequence of items</TD>
              </TR>
              <TR>
                <TD>while</TD>
                <TD>Repeats a block of code as long as a condition is true</TD>
              </TR>
            </Tbody>
          </Table>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#for loop
for i in range(5):
  print(i) #prints 0, 1, 2, 3, 4

#while loop
i = 0
while i < 5:
  print(i) #prints 0, 1, 2, 3, 4
  i += 1`}
  />
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Conditionals</Subsection>
            <Ptext>Conditionals are used to execute a block of code based on a condition.</Ptext>
            <Ptext>Python has three types of conditionals:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Conditional</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>if</TD>
                <TD>Executes a block of code if a condition is true</TD>
              </TR>
              <TR>
                <TD>elif</TD>
                <TD>Executes a block of code if the previous condition is false and the current condition is true</TD>
              </TR>
              <TR>
                <TD>else</TD>
                <TD>Executes a block of code if all previous conditions are false</TD>
              </TR>
            </Tbody>
          </Table>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Conditional Example
x = -5
#checks if x is positive, negative, or zero
#if statement
if x > 0:
  print("Positive")
#elif statement
elif x == 0:
  print("Zero")
#else statement
else:
  print("Negative") #prints "Negative"
  
#Nested Conditional Example
 for i in range(5):
  if i == 3:
    continue #Continue stops the current iteration and moves to the next
    #break command would stop the loop
  print(i) #prints 0, 1, 2, 4
  
  #Ternary Conditional Example
  x = 5
  y = "Positive" if x > 0 else "Negative"
  print(y) #prints "Positive"`}

/>
          </EditorContainer>
        </PythonBasicsContent>
      </PythonBasicsContainer>
      <PythonBasicsContainer id='Functions'>
        <PythonBasicsContent>
          <PythonBasicsHeader>Functions</PythonBasicsHeader>
          <PythonBasicsSection>
            <Subsection>Functions</Subsection>
            <Ptext>Functions are a block of code that only runs when it is called.</Ptext>
            <Ptext>Python has two types of functions:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Function</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>Built-in Functions</TD>
                <TD>Functions that are built into Python</TD>
              </TR>
              <TR>
                <TD>User-defined Functions</TD>
                <TD>Functions that are defined by the user</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>User-defined Functions</Subsection>
            <Ptext>User-defined functions are created using the def keyword.</Ptext>
            <Ptext>Functions can have parameters and return values.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Function Example
def add(x, y):
  return x + y

result = add(5, 10)
print(result) #prints 15`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Scope</Subsection>
            <Ptext>Scope refers to the visibility of a variable within a program.</Ptext>
            <Ptext>Python has two types of scope:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Scope</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>Global Scope</TD>
                <TD>Variables defined outside of a function</TD>
              </TR>
              <TR>
                <TD>Local Scope</TD>
                <TD>Variables defined inside of a function</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>Global Scope</Subsection>
            <Ptext>Global variables are defined outside of a function and can be accessed by any function in the program.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Global Scope Example
x = 5
def add(y):
  return x + y

result = add(10)
print(result) #prints 15`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Local Scope</Subsection>
            <Ptext>Local variables are defined inside of a function and can only be accessed by that function.</Ptext>
            <Ptext>Namespace: All identifiers with local scope in current call.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Local Scope Example
def add(x, y):
  result = x + y
  return result

result = add(5, 10)
print(result) #prints 15`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Global Keyword</Subsection>
            <Ptext>The global keyword is used to create a global variable inside of a function.</Ptext>
            <Ptext>Global variables can be accessed and modified by any function in the program.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Global Keyword Example
x = 5
def add(y):

  global x #if you dont include this line, x will be local to the function and it will throw an error
  x = x + y
  return x

result = add(10)
print(result) #prints 15`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Parameters</Subsection>
            <Ptext>Parameters are used to pass data to a function.</Ptext>
            <Ptext>Python has two types of parameters:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Parameter</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>Formal Parameters</TD>
                <TD>The expected param in the function</TD>
              </TR>
              <TR>
                <TD>Actual Parameters</TD>
                <TD>What is passed when invoking function</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>Common Function in Python</Subsection>
            <Ptext>Python has many built-in functions that are commonly used.</Ptext>
            <Ptext>Some of the most common built-in functions are:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Function</TH>
                <TH>Description</TH>
                <TH>Example</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>abs()</TD>
                <TD>Returns the absolute value of a number</TD>
                <TD>abs(-5) is 5</TD>
              </TR>
              <TR>
                <TD>len()</TD>
                <TD>Returns number of elements tied to iterable</TD>
                <TD>len([1, 2, 3]) is 3</TD>
              </TR>
              <TR>
                <TD>max()</TD>
                <TD>Returns the largest item in an iterable</TD>
                <TD>max([1, 2, 3]) is 3</TD>
              </TR>
              <TR>
                <TD>min()</TD>
                <TD>Returns the smallest item in an iterable</TD>
                <TD>min([1, 2, 3]) is 1</TD>
              </TR>
              <TR>
                <TD>sum()</TD>
                <TD>Returns the sum of an iterable</TD>
                <TD>sum([1, 2, 3]) is 6</TD>
              </TR>
              <TR>
                <TD>sorted()</TD>
                <TD>Returns a sorted list of an iterable</TD>
                <TD>sorted([3, 2, 1]) is [1, 2, 3]</TD>
              </TR>
              <TR>
                <TD>enumerate()</TD>
                <TD>Returns an enumerate object</TD>
                <TD>enumerate([1, 2, 3]) produces a tuple of the index and value</TD>
              </TR>
              <TR>
                <TD>pow(x,y)</TD>
                <TD>Returns x to the power of y</TD>
                <TD>pow(2, 3) is 8</TD>
              </TR>
              <TR>
                <TD>reversed()</TD>
                <TD>Flips a sequence</TD>
                <TD>reversed([1, 2, 3]) is [3, 2, 1]</TD>
              </TR>
              <TR>
                <TD>round(x,k)</TD>
                <TD>Rounds a number x to the nearest 10^(-k)</TD>
                <TD>round(3.14159, 2) is 3.14</TD>
              </TR>
              <TR>
                <TD>zip()</TD>
                <TD>Returns a zip object</TD>
                <TD>zip([1, 2, 3], [4, 5, 6]) produces a tuple of the elements at the same index</TD>
              </TR>
              <TR>
                <TD>print()</TD>
                <TD>Prints the given object</TD>
                <TD>print("Hello, World!") prints "Hello, World!"</TD>
              </TR>
              <TR>
                <TD>input()</TD>
                <TD>Reads a line from input</TD>
                <TD>name = input("Enter your name: ")</TD>
              </TR>
              <TR>
                <TD>type()</TD>
                <TD>Returns the type of an object</TD>
                <TD>type(5) is int</TD>
              </TR>
              <TR>
                <TD>str()</TD>
                <TD>Returns a string representation of an object</TD>
                <TD>str(5) is "5"</TD>
              </TR>
              <TR>
                <TD>int()</TD>
                <TD>Returns an integer object</TD>
                <TD>int("5") is 5</TD>  
              </TR>
              <TR>
                <TD>float()</TD>
                <TD>Returns a floating point object</TD>
                <TD>float("5.0") is 5.0</TD>
              </TR>
              <TR>
                <TD>range(start,stop)</TD>
                <TD>Iteration of vals 0,1,...,stop - 1</TD>
                <TD>range(5) is 0,1,2,3,4</TD>
              </TR>
            </Tbody>
          </Table>
        </PythonBasicsContent>
      </PythonBasicsContainer>
      <PythonBasicsContainer id='EH'>
        <PythonBasicsContent>
          <PythonBasicsHeader>Exceptions and Handling</PythonBasicsHeader>
          <Ptext>Exceptions are errors that occur during execution of the program. Python has built-in exceptions that are raised when errors occur.</Ptext>
          <Ptext>Python has two types of exceptions:</Ptext>
          <Table>
            <Thead>
              <TR>
                <TH>Exception</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>Built-in Exceptions</TD>
                <TD>Exceptions that are built into Python</TD>
              </TR>
              <TR>
                <TD>User-defined Exceptions</TD>
                <TD>Exceptions that are defined by the user</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>Built-in Exceptions</Subsection>
            <Ptext>Python has many built-in exceptions that are commonly used.</Ptext>
            <Ptext>Some of the most common built-in exceptions are:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Exception</TH>
                <TH>Description</TH>
                <TH>Example</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>ZeroDivisionError</TD>
                <TD>Division by zero</TD>
                <TD>5 / 0</TD>
              </TR>
              <TR>
                <TD>IndexError</TD>
                <TD>Raised if index of sequence is out of bounds</TD>
                <TD>data = [1, 2, 3]; data[3]</TD>
              </TR>
              <TR>
                <TD>KeyError</TD>
                <TD>Raised if key not found in dictionary</TD>
                <TD></TD>
              </TR>
              <TR>
                <TD>ValueError</TD>
                <TD>Raised when param has invalid value</TD>
                <TD>int("hello")</TD>
              </TR>
              <TR>
                <TD>TypeError</TD>
                <TD>Raised when wrong type of param sent to function</TD>
                <TD>result = '3' + 5</TD>
              </TR>
              <TR>
                <TD>NameError</TD>
                <TD>Variable not defined</TD>
                <TD>print(x) but x is not defined</TD>
              </TR>
              <TR>
                <TD>FileNotFoundError</TD>
                <TD>File not found</TD>
                <TD>open("file.txt") but no file found</TD>
              </TR>
              <TR>
                <TD>IOError</TD>
                <TD>Input/output error</TD>
                <TD>File not found, file cannot be read</TD>
              </TR>
              <TR>
                <TD>KeyboardInterrupt</TD>
                <TD>Keyboard interrupt when executing</TD>
                <TD>Ctrl + C</TD>
              </TR>
              <TR>
                <TD>Attribute Error</TD>
                <TD>Attribute not found in object</TD>
                <TD>object has no attribute</TD>
              </TR>
              <TR>
                <TD>EOF Error</TD>
                <TD>End of file error</TD>
                <TD>End of file reached</TD>
              </TR>
              <TR>
                <TD>Stop Iteration</TD>
                <TD>Raised by next(iterator) if no element</TD>
                <TD>End of iterator reached</TD>
              </TR>
            </Tbody>
          </Table>
          <PythonBasicsSection>
            <Subsection>Handling Exceptions</Subsection>
            <Ptext>Exceptions can be handled using try, except, else, and finally blocks.</Ptext>
            <Ptext>Python has four types of blocks:</Ptext>
          </PythonBasicsSection>
          <Table>
            <Thead>
              <TR>
                <TH>Block</TH>
                <TH>Description</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR>
                <TD>try</TD>
                <TD>Block of code to be attempted</TD>
              </TR>
              <TR>
                <TD>except</TD>
                <TD>Block of code to be executed if an error occurs in the try block</TD>
              </TR>
              <TR>
                <TD>else</TD>
                <TD>Block of code to be executed if no errors occur</TD>
              </TR>
              <TR>
                <TD>finally</TD>
                <TD>Block of code to be executed regardless of the outcome</TD>
              </TR>
            </Tbody>
          </Table>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#Handling Exceptions Example
try:

  x = 5 / 0
except ZeroDivisionError:
  print("Cannot divide by zero")
else:
  print("No errors occurred")
finally:
  print("Execution complete")`}
/>
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>User-defined Exceptions</Subsection>
            <Ptext>User-defined exceptions are created by the user using the raise keyword.</Ptext>
            <Ptext>Exceptions can be defined as classes that inherit from the Exception class.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
                height='100%'
                width='100%'
                theme='vs-dark'
                defaultLanguage='python'
                defaultValue={`#User-defined Exceptions Example
class MyError(Exception):
  def __init__(self, message):
    self.message = message

def divide(x, y):
  if y == 0:
    raise MyError("Cannot divide by zero")
  return x / y

try:
  result = divide(5, 0)
  print(result)
except MyError as e:
  print(e.message)`}
/>
          </EditorContainer>
        </PythonBasicsContent>
      </PythonBasicsContainer>
      <PythonBasicsContainer id='Iterators'>
        <PythonBasicsContent>
          <PythonBasicsHeader>Iterators and Generators</PythonBasicsHeader>
          <PythonBasicsSection>
            <Subsection>Iterators</Subsection>
            <Ptext>In Python, an iterator is an object that implements the iterator protocol, consisting of the methods <code>__iter__()</code> and <code>__next__()</code>. Iterators are used to iterate over a collection of data, one element at a time.</Ptext>
            <Ptext>The <code>iter()</code> function is used to get an iterator from an iterable, and <code>next()</code> retrieves the next element from the iterator. When there are no more elements, a <code>StopIteration</code> exception is raised.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
              height='100%'
              width='100%'
              theme='vs-dark'
              defaultLanguage='python'
              defaultValue={`# Example of an Iterator
#A list is an iterable not an iterator
my_list = [1, 2, 3, 4]
iterator = iter(my_list) # Get an iterator for the list

print(next(iterator)) # Outputs: 1
print(next(iterator)) # Outputs: 2
print(next(iterator)) # Outputs: 3
print(next(iterator)) # Outputs: 4
# next(iterator) would raise StopIteration error as there are no more elements.`}
            />
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Generators</Subsection>
            <Ptext>Generators are a simple and powerful tool for creating iterators. They are written using functions but use the <code>yield</code> statement instead of <code>return</code>. Generators produce items one at a time and only when required, which makes them memory-efficient for large datasets.</Ptext>
            <Ptext>Each time the <code>yield</code> statement is executed, the function's state is saved, and the value is returned to the caller. When <code>next()</code> is called again, the function resumes from the last <code>yield</code> statement.</Ptext>
          </PythonBasicsSection>
          <EditorContainer>
            <Editor
              height='100%'
              width='100%'
              theme='vs-dark'
              defaultLanguage='python'
              defaultValue={`# Example of a Generator
def countdown(n):
  while n > 0:
    yield n
    n -= 1

gen = countdown(5)
print(next(gen)) # Outputs: 5
print(next(gen)) # Outputs: 4
print(next(gen)) # Outputs: 3
print(next(gen)) # Outputs: 2
print(next(gen)) # Outputs: 1
# next(gen) would raise StopIteration error as there are no more elements.`}
            />
          </EditorContainer>
          <PythonBasicsSection>
            <Subsection>Differences Between Iterators and Generators</Subsection>
            <Ptext>While both iterators and generators can be used to iterate over data, there are key differences:</Ptext>
            <Bullet>
              <li><b>Memory Efficiency:</b> Generators are more memory-efficient since they produce items one at a time and don't store the entire sequence in memory.</li>
              <li><b>Simplicity:</b> Generators are easier to implement and use compared to iterators. They abstract away the complexity of maintaining the state of the iteration.</li>
              <li><b>Return Values:</b> Generators use <code>yield</code> to return values, while iterators use the <code>__next__()</code> method.</li>
              <li><b>Lifecycle:</b> Generators are a special type of iterator and can only iterate over a set of values once.</li>
            </Bullet>
          </PythonBasicsSection>
        </PythonBasicsContent>
      </PythonBasicsContainer>
    </main>
  );
}
export default PythonBasic;

