'use strict'
{
  const room = document.getElementById('room');
  const regi = document.getElementById('regist_form');

  const lightNow = new Date();
  const startTime = new Date('2020/10/26 14:30:00')
  const endTime = new Date('2020/10/26 17:00:00')


  function entryOn() {
    if (lightNow >= startTime && lightNow <= endTime) {
      room.classList.remove('ds_none');
      room.classList.add('ds_on');
    }
  }

  regi.addEventListener('click', () => {
    const obj = document.documentElement;
    let y = obj.scrollHeight - obj.clientHeight;
    window.scroll(0, y);
    room.classList.remove('ds_on');
    room.classList.add('ds_none');
  });
  

entryOn();

}