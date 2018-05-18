function add_mentee() 
{
	if(localStorage.getItem('rows')==null)
		{var tr=0;}
	else
		{var tr=localStorage.getItem('rows');}
	var x = document.getElementById("Name").value;	
	for(var i =0 ; i<=tr;i++)
		if(x==localStorage.getItem(i+'N'))
		{
			alert("The name already exists.\nTry again with another name.");
			return ;
		}
	var y = document.getElementById("Rating").value;
	var z = document.getElementById("Comments").value;
	localStorage.setItem(tr+'N',x);
	localStorage.setItem(tr+'R',y);
	localStorage.setItem(tr+'C',z);
	tr++;
	localStorage.setItem('rows',tr);
}
function edit_mentee()
{
	var tr=localStorage.getItem('rows');
	var e_Name = prompt("Enter the name of mentee to be edited : ");
	var i=-1;
	for(var j=0;j<=tr;j++)
	{
		if(localStorage.getItem(j+'N')==e_Name)
			i=j;
	}
	if(i==-1)
	{
		alert("Mentee not found  !!");
	}
	else
	{
		alert("Enter 0 if you don't want to change ");
		var new_n = prompt("Enter new name : ");
		var new_r = prompt ("Enter new rating : ");
		var new_c = prompt("Enter new comments : ");
		if(new_n!=0)
			localStorage.setItem(i+'N',new_n);
		if(new_r!=0)
			localStorage.setItem(i+'R',new_r);
		if(new_c!=0)
			localStorage.setItem(i+'C',new_c);
		alert ("Edit Successfull");
	}
}
function delete_mentee()
{
	var d_Name = prompt("Enter the name of mentee to be edited : ");
	var tr=localStorage.getItem('rows');
	var j=0;
	var i=-1;
	for(;j<=tr;j++)
	{
		if(localStorage.getItem(j+'N')==d_Name)
			i=j;
	}
	if(i==-1)
	{
		alert("Mentee not found !!");
	}
	else
	{
		var value = confirm("Do you want to delete the following mentee ? \n  Name : "+localStorage.getItem(i+'N')+"\n  Rating : "+localStorage.getItem(i+'R')+"\n  Comments : "+localStorage.getItem(i+'C'));
		if(!value)
		{
			alert("Deletion Cancelled");
		}
		else
		{
			var temp_n,temp_r,temp_c;
			for(;i<tr;i++)
			{
				temp_n=localStorage.getItem((i+1)+'N');
				localStorage.setItem(i+'N',temp_n);
				temp_r = localStorage.getItem((i+1)+'R');
				localStorage.setItem(i+'R',temp_r);
				temp_c = localStorage.getItem((i+1)+'C');
				localStorage.setItem(i+'C',temp_c);
			}
			tr--;
			if(tr==0)
			{
				localStorage.removeItem('rows');
			}
			else
			{
				localStorage.setItem('rows',tr);
			}
		}
	}
}
function sort()
{
	var tmp,a,b;
	var tr=localStorage.getItem('rows');
	for (var i = tr ; i >= 0; i--) 
	{
		for (var j = tr- i+1; j >= 0; j--)
		{
			a=localStorage.getItem(j+'R');
			b=localStorage.getItem(j - 1+'R');
			if (a < b)
			{
				tmp = a;
				localStorage.setItem(j+'R',b);
				localStorage.setItem(j-1+'R',tmp);
			}
		}	
	}
}
