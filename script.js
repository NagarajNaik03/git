async function getResponse() {
    const response = await fetch(
        'https://5f74013db63868001615fe76.mockapi.io/api/v1/products',
        {
            method: 'GET',
           headers: {
            "Content-Type": "application/json",
          },
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
}
var c = "hello"
