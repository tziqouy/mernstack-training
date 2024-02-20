import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">
        Nuriko Inventory App
      </h1>
      <p className="mb-4 text-slate-700">
        The inventory app is a web application that allows users to manage and
        track their inventory. It provides features such as adding new items,
        updating existing items, and viewing the current inventory.
      </p>
      <p className="mb-4 text-slate-700">
        The app provides a user-friendly interface with intuitive controls for
        easy navigation and management of inventory items. Users can easily
        search for specific items, sort them by various criteria, and perform
        bulk actions such as deleting or exporting items.
      </p>
      <p className="mb-4 text-slate-700">
        Additionally, the app includes advanced features like generating
        reports, setting up notifications for low stock items, and integrating
        with external systems for seamless inventory management.
      </p>
    </div>
  );
}
