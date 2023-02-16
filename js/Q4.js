const values=[3,11,7,2,9,10]
let Sum = values[0]
let Min = values[0]
let Max = values[0]

for(let i=1; i < values.length; i++)
{
  Sum=Sum+values[i]; 
  if(Max<values[i]) 
  {
      Max=values[i]
  }
  if(Min>values[i])
  {
      Min=values[i]
  }
}
print("Sum of elements of given array is:", Sum) 
print("Minimum of elements of given array is:", Min)
print("Maximum of elements of given array is:", Max)