     let a;
     let date;
     let time;
     const detail={weekday:'long',year:'numeric',month:'long',day:'numeric'};
     setInterval(() => {
      a=new Date();
      date=a.toLocaleDateString(undefined,detail);
      time= a.getHours()+":"+a.getMinutes()+":"+ a.getSeconds();
      document.getElementById('time').innerHTML=time+ "<br><br>on " +date;
    }, 1000);
