function madd(a,b)
{
    let r=[]
    for(var i=0;i<a.length;i++)
    {
        r[i]=[]
        for(var j=0;j<a[0].length;j++)
        {
            r[i][j]=a[i][j]+b[i][j] 
        }
  
    }
    return r;

}
var a=[[1,2,3],[4,5,6],[7,8,9]];
var b=[[9,8,7],[6,5,4],[3,2,1]];
console.log(madd(a,b))