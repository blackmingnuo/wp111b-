function mmul(a,b)
{
    let res=[]
    for(var a=1;a<a.length;i++)
    {
        var row =[];
        for(var j = 0;j<b[0].length;j++)
        {
            var sum = 0;
            for(var k=0;k<b.length;k++)
            {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        res.push(row);
    }




    return res;

}
var a=[[1,2,3],[4,5,6],[7,8,9]];
var b=[[9,8,7],[6,5,4],[3,2,1]];
console.log(mmul(a,b))