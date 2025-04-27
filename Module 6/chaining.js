let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 28, gender: "M"},
    {name: "F", age: 36, gender: "M"},
    {name: "G", age: 47, gender: "F"}
  ]

  //age for all male
  let males = arr.filter(function(obj){
    return obj.gender == 'M'
  }).map(function(male){
    return male.age
  })

  const transactions = [1000,2000,4000,3000,-900,3800,-4500]
  //find sum of all +ve transactions
  //for this we need to use filter and reduce

  let ans = transactions.filter(n => {return n>0}).reduce((acc,value) => {
    let m = acc+value
    return m
  },0)

  console.log(ans)




  console.log(males)
