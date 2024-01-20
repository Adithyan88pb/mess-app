import React, { useState } from "react";
import items from "../../StaticData/data";
import Categories from "../../components/categories/Categories";
import Menu from "../../components/Menu/Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function Home() {
  const [menuItems, setMenuitems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const fillterItems = (category) => {
    if (category === "all") {
      setMenuitems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuitems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Mess App</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} fillterItems={fillterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Home;
