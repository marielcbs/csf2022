"use client";

import { useState } from "react";

const tabs = [
  "Calendários",
  "Horários",
  "Atualidades",
];

export default function PdfTabs() {
  const [active, setActive] = useState("Calendários");

  return (
    <div>
      <div className="mb-8 flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-lg px-4 py-2 ${
              active === tab
                ? "bg-[#0f2f5f] text-white"
                : "border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="mb-4 text-xl font-semibold">
          {active}
        </h3>

        <p>
          Nenhum arquivo disponível.
        </p>
      </div>
    </div>
  );
}