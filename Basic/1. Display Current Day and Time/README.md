# Display Current Day and Time

## Problem

Write a JavaScript program to display the **current day and time** in the following format:

**Sample Output**

```
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
```

---

## Description

This program retrieves the **current date and time** using JavaScript's built-in `Date` object and formats the output to display:

* The **current day of the week**
* The **current time in 12-hour format**
* The appropriate **AM / PM indicator**
* Proper formatting for **minutes and seconds**

---

## Concepts Used

This exercise helps practice several important JavaScript concepts:

* The **Date object**
* Working with **arrays**
* **Conditional statements**
* **Ternary operators**
* **String formatting**
* Converting **24-hour time to 12-hour format**
* Handling **special cases like Midnight and Noon**

---

## Approach

1. Create an array containing the names of the days of the week.
2. Use the `Date` object to get the current date and time.
3. Retrieve the day index using `getDay()` and map it to the corresponding day name.
4. Extract the current hour, minutes, and seconds.
5. Convert the hour from **24-hour format to 12-hour format**.
6. Determine whether the time is **AM or PM**.
7. Add leading zeros to minutes and seconds if needed.
8. Handle special cases such as **Noon** and **Midnight**.
9. Print the formatted output to the console.

---

## JavaScript Solution

```javascript
function
```
