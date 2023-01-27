

const string_concat = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  const bodyBuffer = [];
  for await (const chunk of req) {
    bodyBuffer.push(chunk);
  }
  const data = Buffer.concat(bodyBuffer).toString();
  const reqData = JSON.parse(data || "{}");

  const result = reqData.str1 + reqData.str2

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `string concat`, result}))
  res.end()
  
}

export default string_concat
