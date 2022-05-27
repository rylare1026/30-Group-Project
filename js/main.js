document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const month = document.querySelector("#month").value.toLowerCase();
  const res = await fetch(`/api?month=${month}`)
  const data = await res.json()

  console.log(data);
  // Displays month back to user
  document.querySelector("#month").textContent = month.toUpperCase()
  // Changes image source
  document.querySelector("#cartoon").src = data.cartoon
}