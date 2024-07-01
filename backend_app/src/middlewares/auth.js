import { verify } from "jsonwebtoken";

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
   // console.log("Authorization Header Missing");
    return response.status(401).json({ error: "User not authorized!" });
  }

  // Verifica se o header de autorização está no formato correto: Bearer tokenjwt1234567890
  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "93199a58b91a9516c1f3979ce2822322"); // Substitua pela sua chave secreta
    console.log("Decoded Token:", decoded); // Exibe o conteúdo decodificado do token JWT no console

    // Se o token for válido, você pode adicionar informações do usuário ao request se necessário
    request.userId = decoded.userId; // Por exemplo, se o token contém um ID de usuário

    return next(); // Prossiga para a próxima função (rota ou middleware)
  } catch (err) {
    console.error("JWT Verification Error:", err); // Log de erro para ajudar na depuração
    return response.status(401).json({ error: "Invalid JWT Token" });
  }
};
