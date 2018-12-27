let final=0;
a=['+','-','/','x'];
document.querySelector('#one').addEventListener('click',fun);
document.querySelector('#two').addEventListener('click',fun);
document.querySelector('#thr').addEventListener('click',fun);
document.querySelector('#fr').addEventListener('click',fun);
document.querySelector('#fv').addEventListener('click',fun);
document.querySelector('#sx').addEventListener('click',fun);
document.querySelector('#svn').addEventListener('click',fun);
document.querySelector('#egt').addEventListener('click',fun);
document.querySelector('#nin').addEventListener('click',fun);
document.querySelector('#zer').addEventListener('click',fun);
document.querySelector('#pls').addEventListener('click',func);
document.querySelector('#min').addEventListener('click',func);
document.querySelector('#into').addEventListener('click',func);
document.querySelector('#dvd').addEventListener('click',func);
document.querySelector('#c').addEventListener('click',function(e)
{
  document.querySelector('#outp').value='';
});
document.querySelector('#into').addEventListener('click',func);
  function func(e)
  {
    let d=document.querySelector('#outp').value;
    let v=e.target.innerText;
    if(a.includes(d.slice(-1)))
    {
      alert('Enter a Number');
    }
    else {
      d=d+v;
      document.querySelector('#outp').value=d;
    }
  }
function fun(e) {
  let d=e.target.innerText;
  let v=document.querySelector('#outp').value;
  v=v+d;
  document.querySelector('#outp').value=v;
  }
document.querySelector('#eqt').addEventListener('click',function(e)
{
  let s=[];
  var pre=0;
  let hold=[];
  let d=document.querySelector('#outp').value;
  if(a.includes(d.slice(-1)))
  {
    alert('Enter a vald number');
  }
  else {
    for (let i = 0; i < d.length; i++) {
      if(i==(d.length-1))
      {
          s.push(parseInt(d.slice(pre)));
          continue;
      }
      if (a.includes(d[i])) {
        s.push(parseInt(d.slice(pre,i)));
        hold.push(d[i]);
        pre=i+1;
      }
    }
    let j=0;
    var k=s[0];
    for(let i=1;i<s.length;i++)
    {

          if(hold[j]=='+')
          {
            k=k+s[i];
          }
          if (hold[j]=='-') {
            k=k-s[i];
          }
          if (hold[j]=='/') {
            k=k/s[i];
        }
          if (hold[j]=='x') {
            k=k*s[i];

          }
          j++;
    }
  }
  console.log(s);
  console.log(hold);
  final=k;
  document.querySelector("#outp").value=final;
});
