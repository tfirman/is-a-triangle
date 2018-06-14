function IsATriangle(p1,p2,p3) {
  return ((p1[1]-p2[1]) * (p1[0]-p3[0]) != (p1[1]-p3[1]) * (p1[0]-p2[0]));
}

describe("IsATriangle", function() {

  it('should return false if all three input points are at the origin', function() {
    expect(IsATriangle([0,0],[0,0],[0,0])).toEqual(false);
  });

  it('should return false if p1 = p2', function() {
    expect(IsATriangle([1,1],[1,1],[3,2])).toEqual(false);
  });

  it('should return false if p1 = p3', function() {
    expect(IsATriangle([1,1],[2,3],[1,1])).toEqual(false);
  });

  it('should return false if p3 = p2', function() {
    expect(IsATriangle([3,2],[1,1],[1,1])).toEqual(false);
  });

  it('should return true if p1, p2, and p3 form a triangle', function() {
    expect(IsATriangle([1.1,1],[-2,0],[51,2.3])).toEqual(true);
  });

  it('should return false if the three input points are in a line', function() {
    expect(IsATriangle([1,0],[2,2],[3,4])).toEqual(false);
  });

  it('should return false if the three input points are in a line, with p1 in the middle', function() {
    expect(IsATriangle([2,2],[1,0],[3,4])).toEqual(false);
  });

  it('should return false if the three input points are in a vertical line', function() {
    expect(IsATriangle([0,0],[0,1],[0,2])).toEqual(false);
  });

  it('should return false if the three input points are in a horizontal line', function() {
    expect(IsATriangle([0,0],[1,0],[2,0])).toEqual(false);
  });

  it('should return true for a triangle with a vertical p1-p2 segment', function() {
    expect(IsATriangle([0,0],[0,1],[2,1])).toEqual(true);
  });

  it('should return true for a triangle with a vertical p1-p3 segment', function() {
    expect(IsATriangle([0,0],[1,1],[0,2])).toEqual(true);
  });

  it('should return true for a triangle with a horizontal p1-p2 segment', function() {
    expect(IsATriangle([0,0],[1,0],[2,1])).toEqual(true);
  });

  it('should return true for a triangle with a horizontal p1-p3 segment', function() {
    expect(IsATriangle([0,0],[1,1],[2,0])).toEqual(true);
  });

  it('should return true for a triangle with a horizontal p2-p3 segment', function() {
    expect(IsATriangle([1,1],[0,0],[2,0])).toEqual(true);
  });

  it('should return true for a triangle with a vertical p2-p3 segment', function() {
    expect(IsATriangle([1,1],[0,0],[0,2])).toEqual(true);
  });

});
