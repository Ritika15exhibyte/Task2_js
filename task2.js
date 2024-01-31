

  let a = [
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2]
  ];
  
  
  let diagonal1 = [];

  for (let i = 0; i < a.length; i++)
   {
    let diagonal2 = [];

    for (let j = 0; j <= i; j++) 
    {
      diagonal2.push(a[i - j][j]);
    }

    diagonal1.push(diagonal2);
  }
  
  
  for (let i = 0; i < diagonal1.length; i++)
   {
    diagonal1[i].sort((a, b) => a - b);
  }
  
  
  for (let i = 0; i < a.length; i++)
   {
    for (let j = 0; j <= i; j++)
     {
      a[i - j][j] = diagonal1[i][j];
    }
  }
  
  
  console.log(a);
  

  