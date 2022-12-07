const baseURL = "http://localhost:3000";

const getAllBooks = async () => {
  const data = await fetch(baseURL);
 console.log(data, "Coming from our backend server");
}