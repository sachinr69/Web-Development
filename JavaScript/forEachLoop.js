const coding = ["js", "java", "c", "c++", "React"]


//================callback==========================
coding.forEach(function (item) {
    console.log(item);
} )

// fat arrow

coding.forEach((item)=> {
      console.log(item);
})

coding.forEach((item , index , arr)=> {
      console.log(item, index, arr);
})