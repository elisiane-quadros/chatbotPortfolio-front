import axios from "axios";

export async function sendMessageToAPI(message: string) {
  const body = { message }

  try {
    const response = await axios.post("http://127.0.0.1:8000/chat", body);

    return response.data.reply;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Erro na resposta do backend:",
        error.response?.statusText || error.message,
      );
    } else {
      console.error("Erro desconhecido:", error);
    }
    throw error;
  }
}