function vdot(a,b)
{
    var r =[];
    for(var i=0;i<a.length;i++)
    {
        r[i]=a[i]*b[i];
    }
    return r;
    
}

var v1 =[1,2],v2=[6,3]
console.log(vdot(v1,v2));