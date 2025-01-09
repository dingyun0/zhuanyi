export async function loginApi(email: string, password: string) {
  console.log(JSON.stringify({ email, password }));

  return fetch("http://127.0.0.1:9005/ai/test/testDemo2", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}
