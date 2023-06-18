function vadd(a,b)
{
    var r =[];
    for(var i=0;i<a.length;i++)
    {
        r[i]=a[i]+b[i];
    }
    return r;
    
}

var v1 =[1,2],v2=[1,1];
console.log('vadd(v1,v2)=',vadd(v1,v2));