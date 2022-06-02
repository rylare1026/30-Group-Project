console.log('hello from js')
document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const month = document.querySelector("#months").value.toLowerCase();
  const res = await fetch(`/api?month=${month}`)
  const data = await res.json()

  console.log(data);
  // Displays month back to user
  document.querySelector("#monthText").textContent = month.toUpperCase()
  // Changes image source to image for current month
  document.querySelector("#cartoon").src = data.cartoon
}