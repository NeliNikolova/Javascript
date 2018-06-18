function sortRectangle(rectangleData) {
    function createRectangle(width,height) {
        let rectangle = {
            width: width,
            height: height,
            area:  function () {
              return  this.width * this.height;
            },
            compareTo: function (other) {
                let result = other.area() - this.area();
                return result || other.width - this.width;
            }
        };
        return rectangle;
    }
        let rects = [];
        for (let [width, height] of rectangleData) {
            let rect = createRectangle(width, height);
            rects.push(rect);

        }
        rects.sort((a, b) => a.compareTo(b));
        return rects;
    }

console.log(sortRectangle([[10, 5], [5, 12]]));
