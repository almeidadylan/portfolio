/*port async function status(request) {
  return Response.json({
    status: "ok",
    updated_at: new Date().toISOString(),
  });
}*/

export async function GET ( request: Request ) {
  const data = new Date().toISOString();

  //"use server"
    return Response.json({
      front_end: {
        updated_at: data
      }
    })
}
