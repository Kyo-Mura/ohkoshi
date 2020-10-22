'use strict'
{
  const room = document.getElementById('room');
  const lightNow = new Date();
  const startTime = new Date('2020/10/22 11:40:00')
  const endTime = new Date('2020/10/26 17:00:00')


  function entryOn() {
    if (lightNow >= startTime && lightNow <= endTime) {
      room.classList.remove('ds_none');
      room.classList.add('ds_on');
    }
  }


entryOn();

}