export async function submitScore(score) {
  return fetch("http://localhost:3000/api/scores", {
    method: "POST",
    body: JSON.stringify(score),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(json => json)
    .catch(err => {});
}
