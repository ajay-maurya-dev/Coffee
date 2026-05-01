import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  
  const items = [
    { id: 1, name: "Burger", price: 120, img: "/image_1.png", category: "Burger" },
    { id: 2, name: "Pizza", price: 200, img: "/image_2.png", category: "Pizza" },
    { id: 3, name: "Fries", price: 90, img: "/image_3.png", category: "Finger" },
    { id: 4, name: "Cake", price: 150, img: "/image_4.png", category: "Cakes" },
    { id: 5, name: "Macaroni", price: 180, img: "/image_5.png", category: "Machuruna" },
    { id: 6, name: "Rice", price: 130, img: "/image_6.png", category: "Rice" },
  ];

  
  const [counts, setCounts] = useState(Array(items.length).fill(0));
  const [category, setCategory] = useState("All");

  
  const handleAdd = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  
  const totalItems = counts.reduce((a, b) => a + b, 0);

  
  const filtered =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  const categories = ["All", "Burger", "Pizza", "Finger", "Cakes", "Machuruna", "Rice"];

  return (
    <>
      
      <Navbar totalItems={totalItems} />

      <div className="flex flex-col md:flex-row">

        
        <aside className="bg-orange-500 text-white p-4 md:w-1/5 flex md:flex-col flex-row justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded ${
                category === cat ? "bg-white text-orange-500 font-bold" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 w-full">
          {filtered.map((item) => {
            const index = items.findIndex((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-3 hover:scale-105 transition"
              >
                <img
                  src={item.img}
                  className="w-full h-32 object-cover rounded"
                  alt={item.name}
                />

                <h4 className="text-center mt-2 font-semibold">
                  {item.name}
                </h4>

                <p className="text-center text-gray-600">₹{item.price}</p>

                <button
                  onClick={() => handleAdd(index)}
                  className="mt-2 w-full bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
                >
                  Add ({counts[index]})
                </button>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;