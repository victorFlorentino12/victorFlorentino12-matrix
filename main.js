function show(){
    var matrix =[
        ["Lion","hippopotamus","giraffe"],
        ["Sinba","motomoto","malman"],
        [3,4,6]
    ];
    for(let i=0; i< matrix.length; i++){
        for( let j=0; j < matrix[i].length; j++){
            document.write(matrix[i][j]+ "<br/>");
        }
    }
        
}