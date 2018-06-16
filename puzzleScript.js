var ttable= document.getElementById("myTable");   //Get table object from html.


ttable.style.backgroundColor= "black";
var rowArray= new Array();    //An array of rows.
for(var size=0; size<12; size++)
{
  rowArray[size]= new Array();    //Each row has an array of cells.
}
var topNumbers= ["2 5", "2 6", "1 3", "3", "2 4", "5 1", "6", "4 2", "5", "4", "4 4", "3 2"];
var leftNumbers= ["1 1 1 1", "1 3 1 1 1", "1 1 5", "1 3 5", "1 1 2 1 1", "1 1 2 2 2", "3 5 1", "2 2", "2 1 1", "1 2 1", "1 1 1", "1 1 1"];

var topRow= ttable.insertRow();   //Insert a top row to enter numbers.
var extraCell= topRow.insertCell();     //Adding an empty extra leftmost cell.
for(var k=0; k<12; k++)
{
  var topCell= topRow.insertCell();   //Adding 12 cells for writing numbers.
  topCell.innerText= topNumbers[k];
  topCell.style.backgroundColor= "black";
  topCell.style.color= "white";
  topCell.style.height="25px";
  topCell.style.width="35px";
}
for(var i=0; i<12; i++)
{
  var row= ttable.insertRow();    //Adding 12 rows.
  rowArray.push(row);   //current row added to rowArray.
  var ccell= row.insertCell();    //Each row has an additional cell for storing number.
  ccell.style.width="80px";
  ccell.style.color="white";
  ccell.innerText= leftNumbers[i];
  for(var j=0; j<12; j++)   //Adding 12 cells to each row.
  {
    var cell= row.insertCell();
    rowArray[i].push(cell);   //Current cell added to array. Now we can access each cell later.
    cell.style.height= "20px";
    cell.style.width= "20px";
    cell.style.backgroundColor="white";
    cell.className="noSolPart";
    if(i==0 || i==1)
    {
      if(j==0 || j== 4 || j==7 || j==9)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==1)
    {
      if(j==2 || j==3 || j==11)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==2 || i==3)
    {
      if(j==1 || j==3 || (j>=7 && j<=11))
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==3 || i==4 || i==5 || i==6)
    {
      if(j==4 || j==5)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==4 || i==5)
    {
      if(j==0 || j==2 || j==8 || j==10)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==5 || i==6)
    {
      if(j==7 || j==11)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==6)
    {
      if(j==0 || j==1 || j==2 || j==6 || j==8)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==8 || i==7)
    {
      if(j==0 || j==1 || j==6)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==7)
    {
      if(j==5)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==8)
    {
      if(j==10)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i ==9 || i==10 || i==11)
    {
      if(j==1 || j==6 || j==10)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    if(i==9)
    {
      if(j==5)
      {
        cell.classList.remove('noSolPart');
        cell.className="solPart";
      }
    }
    cell.onclick= function(event)
    {
      if(event.target.style.backgroundColor=="gray")
      {
        event.target.style.backgroundColor="white";
      }
      else
      {
        event.target.style.backgroundColor="gray";
      }
      if(testCells()==true && testOtherCells()==true)   //Check if all cells are colored and others are not.
      {
        alert("Congratulations "+q+",  You have solved the puzzle. ");
        var ans= prompt("Do you want to play again? Answer: Yes or No");
        if(ans=="Yes" || ans=="yes" || ans =="YES")
        {
          resetTable();
        }
        else
        {
          var ans2= prompt("Do you want to close the puzzle? ");
          if(ans2== "Yes" || ans2=="yes" || ans =="YES")
            {
              window.close();
            }
        }
      }
    };
  }
}
var solutions= document.getElementsByClassName("solPart");    //An array of cells that are part of solution.
var noSolutions= document.getElementsByClassName("noSolPart");  //An array of cells that are not part of solution.

function testCells()      //Checks if all cells which are part of solution are colored.
{
  for(var k=0; k<solutions.length; k++)
  {
    if(solutions[k].style.backgroundColor == "gray")
    {
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}
function testOtherCells()
{
  for(var m=0; m<noSolutions.length; m++)
  {
    if(noSolutions[m].style.backgroundColor == "white")
    {
      continue;
    }
    else
    {
      return false;
    }
  }
  return true;
}
var q= window.prompt("Please enter your name. "); //For header.
if(q!=null)
{
  document.getElementById("head").innerText= "Welcome to Mayank's puzzle, "+q; //Header
}
else
{
  document.getElementById("head").innerText= "Welcome to Mayank's puzzle, No name :P";
}
function changeBack()   //For changing backgrounds.
{
  var randomNum= Math.floor((Math.random() * (4 - 0 + 1)) + 0);
  if(randomNum==0)
  {
    document.body.style.backgroundImage = "url('./back4.png')";
  }
  else if(randomNum==1)
  {
    document.body.style.backgroundImage = "url('./back3.png')";
  }
  else if(randomNum==2)
  {
      document.body.style.backgroundImage = "url('./background.png')";
  }
  else if(randomNum==3)
  {
    document.body.style.backgroundImage = "url('./back5.png')";
  }
  else
  {
    document.body.style.backgroundImage = "url('./back6.jpg')";
  }
}
function testUser()     //Idle user
{
  var w= window.prompt("Are you still there?");
  if(w=="Yes" || w=="yes")
  {
    clearTimeout(t);
  }
  else
  {
    window.close();
    window.alert("Bye. :)");
  }
}
function testProgress()
{
  var noCount=0;
  var count=68;
  for(var g=0; g<solutions.length; g++)
  {
    if(solutions[g].style.backgroundColor=="gray")
    {
      count--;
    }
  }
  if(count<=5 && count>0)
  {
    alert("Getting pretty close! "+count+" cells away. ");
  }
  else if(count==0)
  {
    for(var t=0; t<noSolutions.length; t++)
    {
      if(noSolutions[t].style.backgroundColor=="gray")
      {
        noCount++;
      }
    }
    if(noCount>=1)
    {
      alert("All cells have been found but some extra cells are marked. Please find and unmark them. ");
    }
    else {
      alert("Congratulations "+q+", You have solved the puzzle. ");
      }
  }
  else {
    alert("You are "+count+" cells away!");
  }
}
function revealSol()
{
  resetTable();     //Clearing all clicked cells.
  for(var p=0; p<solutions.length; p++) //Goes through each cell which is part of solution and changes its color.
  {
    solutions[p].style.backgroundColor= "gray";
  }
}
function displayInfo()
{

  alert("Welcome to Mayank's Puzzle, "+q+"! Below are some instructions and features of the puzzle.\n\n 1) Test Progress: This feature will allow users to track their progress. This button displays the number of cells a user is away from winning the game, and notfies if some extra cells are marked.\n\n 2) Change Background Image: This feature changes the background each time user clicks the associated button.\n\n3) Idle User: If the user has been idle for more than an hour, the window confirms if the user is still present and closes the window otherwise. \n\n 4) After winning, the puzzle asks the user if he wants to continue playing with cells, close the puzzle or restart the puzzle.\n\n Enjoy puzzling! ");
}
function resetTable()   //Clears all the colors.
{
  for(var ro=0; ro<12; ro++)
  {
    for(var l=0; l<12; l++)
    {
      rowArray[ro][l].style.backgroundColor="white";
    }
  }
}
var t= setTimeout(testUser, 3600050);    //Will run testUser() after 500000 milliseconds- User idle.
