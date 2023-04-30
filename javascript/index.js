function updateTime() {
  let seattleElement = document.querySelector("#seattle");
  if (seattleElement) {
    let seattleDateElement = document.querySelector("#seattle .date");
    let seattleTimeElement = document.querySelector("#seattle .time");
    let seattleTime = moment().tz("America/Los_Angeles");

    seattleDateElement.innerHTML = seattleTime.format("MMMM Do, YYYY");
    seattleTimeElement.innerHTML = seattleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = document.querySelector("#madrid .date");
    let madridTimeElement = document.querySelector("#madrid .time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do, YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = document.querySelector("#auckland .date");
    let aucklandTimeElement = document.querySelector("#auckland .time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do, YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = document.querySelector("#honolulu .date");
    let honoluluTimeElement = document.querySelector("#honolulu .time");
    let honoluluTime = moment().tz("Pacific/Honolulu");

    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
