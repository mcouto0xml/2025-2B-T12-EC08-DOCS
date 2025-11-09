export async function predict(payload) {
  await new Promise((r) => setTimeout(r, 200 + Math.random() * 400));
  return {
    id: `mock_${Date.now()}`,
    text: "TESTESTESTESMODELOMOCKADO",
    inputEcho: payload,
    timestamp: new Date().toISOString()
  };
}