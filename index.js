const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// 🔥 Tabla de precios de créditos
const precios = [
  { monto: 10, creditos: 60, icono: "⚡" },
  { monto: 20, creditos: 125, icono: "🚀" },
  { monto: 50, creditos: 330, icono: "💎" },
  { monto: 100, creditos: 700, icono: "👑" },
  { monto: 200, creditos: 1500, icono: "🔥" }
];

// ✅ Ruta para consultar todos los precios
app.get("/precios", (req, res) => {
  res.json({ success: true, data: precios });
});

// ✅ Ruta para consultar un precio específico por monto
app.get("/precios/:monto", (req, res) => {
  const monto = parseInt(req.params.monto);
  const plan = precios.find(p => p.monto === monto);

  if (plan) {
    res.json({ success: true, data: plan });
  } else {
    res.status(404).json({ success: false, message: "Monto no encontrado" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
