const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/public')));

// API Routes
app.get('/api/books', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Колобок",
      author: "Русская народная сказка",
      isPremium: false,
      price: 0,
      coverImage: "/kolobok-cover.webp",
      content: "Жили-были старик со старухой. Вот и говорит старик старухе: — Поди-ка, старуха, по коробу поскреби, по сусеку помети, не наскребешь ли муки на колобок..."
    },
    {
      id: 2,
      title: "Теремок",
      author: "Русская народная сказка",
      isPremium: false,
      price: 0,
      coverImage: "/book-cover-fantasy.webp",
      content: "Стоит в поле теремок. Бежит мимо мышка-норушка. Увидела теремок, остановилась и спрашивает..."
    }
  ]);
});

app.get('/api/audio-books', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Автомобиль",
      author: "Носов Н.Н.",
      isPremium: false,
      price: 0,
      coverImage: "/avtomobil-cover.webp",
      audioUrl: "/avtomobil-audio.mp3"
    }
  ]);
});

app.get('/api/shop-products', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Футболка RIZY LAND детская",
      description: "Удобная футболка для детей с логотипом RIZY LAND",
      price: 1500,
      image: "/logo.webp"
    },
    {
      id: 2,
      name: "Кружка RIZY LAND",
      description: "Яркая кружка для детей",
      price: 800,
      image: "/logo.webp"
    }
  ]);
});

app.get('/api/trash/books', (req, res) => {
  res.json([]);
});

app.get('/api/categories', (req, res) => {
  res.json([
    { id: 1, name: "Сказки", color: "#FF6B6B" },
    { id: 2, name: "Приключения", color: "#4ECDC4" },
    { id: 3, name: "Обучающие", color: "#45B7D1" }
  ]);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 RIZY LAND запущен на порту ${PORT}`);
  console.log(`📱 Telegram Mini App готов к работе!`);
});