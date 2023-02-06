export async function getClients() {
  const request = await fetch(import.meta.env.VITE_APi_URL);
  const response = await request.json();
  return response;
}
export async function getClientById(id) {
  const request = await fetch(`${import.meta.env.VITE_APi_URL}/${id}`);
  const response = await request.json();
  return response;
}

export async function addClient(data) {
  try {
    const request = await fetch(import.meta.env.VITE_APi_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateClient(id, data) {
  try {
    const request = await fetch(`${import.meta.env.VITE_APi_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(id) {
  try {
    const request = await fetch(`${import.meta.env.VITE_APi_URL}/${id}`, {
      method: "DELETE",
    });
    await request.json();
  } catch (error) {
    console.log(error);
  }
}
