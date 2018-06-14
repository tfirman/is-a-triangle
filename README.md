# IsATriangle

The problem as I understand it is to write a function that takes three (x,y) coordinates and return a boolean signifying whether they form a triangle.

This is a function that takes three points as the two-dimensional arrays p1 p2 and p3. It returns true if the three points comprise a triangle, and false otherwise.  

The method that was applied to this problem was to determine whether or not two of the line segments (p1 to p2) and (p1 to p3) had the same slope.  This is never true for any triangle and is true otherwise (possible exceptions addressed in testing- some degenerate cases where "slope" isn't well defined or otherwise raise concerns about division by zero will nevertheless work with the formula below)

Where x1 is the x coordinate of p1, y1 is the y coordinate of p1 etc., the formula to determine equality of the slopes is:

(y1-y2)/(x1-x2) == (y1-y3)/(x1-x3)

multiplying by both denominators:

(y1-y2)(x1-x3) == (y1-y3)(x1-x2)

Which will be true for non-triangles and false for any triangle.

Testing included example triangles with one vertical or horizontal segment to verify there were no issues with division by zero.  Because the formula treats p1 differently than p2 and p3, testing involving swapping the order of input points was included.
