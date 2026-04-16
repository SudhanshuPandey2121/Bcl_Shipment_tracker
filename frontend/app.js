const BASE = "http://localhost:3000";

async function createShipment() {
  const id = document.getElementById("createId").value;
  const location = document.getElementById("createLoc").value;

  await fetch(BASE + "/create", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ id, location })
  });

  alert("Created!");
}

async function updateLocation() {
  const id = document.getElementById("updateId").value;
  const location = document.getElementById("updateLoc").value;

  await fetch(BASE + "/update", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ id, location })
  });

  alert("Updated!");
}

async function getHistory() {
  const id = document.getElementById("trackId").value;

  const res = await fetch(BASE + "/history/" + id);
  const data = await res.json();

  const list = document.getElementById("result");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.location + " - " + new Date(Number(item.timestamp) * 1000);
    list.appendChild(li);
  });
}