# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment or decrement a numerical field in a document. However, attempting to increment a field with a non-numeric value will result in an error.

**Bug:** The provided JavaScript code incorrectly uses a string value ('abc') with the `$inc` operator. This leads to a MongoDB error. 

**Solution:** The solution file demonstrates the correct usage of `$inc`, using a numerical value to increment the field.