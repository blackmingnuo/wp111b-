function month(month)
{
    return m2i[month]
}

var m2i = 
{
    "January": "一月",
    "February": "二月",
    "March": "三月",
    "April": "四月",
    "May": "五月",
    "June": "六月",
    "July": "七月",
    "August": "八月",
    "September": "九月",
    "October": "十月",
    "November": "十一月",
    "December": "十二月"
}
console.log(month("April"))
console.log(month("July"))
console.log(month("October"))

