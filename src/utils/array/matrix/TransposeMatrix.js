/**
* Transposes the elements of the given matrix (array of arrays).
* The transpose of a matrix is a new matrix whose rows are the columns of the original.
*
* A Matrix is simply an array of arrays, where each sub-array (the rows) have the same length:
*
* let matrix2 = [
*    [ 1, 1, 1, 1, 1, 1 ],
*    [ 2, 0, 0, 0, 0, 4 ],
*    [ 2, 0, 1, 2, 0, 4 ],
*    [ 2, 0, 3, 4, 0, 4 ],
*    [ 2, 0, 0, 0, 0, 4 ],
*    [ 3, 3, 3, 3, 3, 3 ]
*];
*
* Row elements can be any data-type (number, string, Object, etc)
*
* @method
* @param {Array<any[]>} array - The matrix to transpose.
* @return {Array<any[]>} A new transposed matrix
*/
export default function TransposeMatrix (array) {

    const sourceRowCount = array.length;
    const sourceColCount = array[0].length;

    let result = new Array(sourceColCount);

    for (let i = 0; i < sourceColCount; i++)
    {
        result[i] = new Array(sourceRowCount);

        for (let j = sourceRowCount - 1; j > -1; j--)
        {
            result[i][j] = array[j][i];
        }
    }

    return result;

}
