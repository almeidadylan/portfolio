test("GET '/api/v1/status' should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200)

    const responseBody = await response.json();

    const parseUpdatedAt = new Date(responseBody.front_end.updated_at).toISOString();
    expect(responseBody.front_end.updated_at).toEqual(parseUpdatedAt);
});