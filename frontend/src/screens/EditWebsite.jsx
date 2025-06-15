import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web1 from "../templates/Web1";
import Web2 from "../templates/Web2";
import Web3 from "../templates/Web3";
import Web4 from "../templates/Web4";
import Web5 from "../templates/Web5";
import Web6 from "../templates/Web6";
import Web from "../templates/Web";
import image from "../assets/profile.png";

const renderCase = (num) => {
  switch (num) {
    case 1:
      return <Web1 />;
    case 2:
      return <Web2 />;
    case 3:
      return <Web3 />;
    case 4:
      return <Web4 />;
    case 5:
      return <Web5 />;
    case 6:
      return <Web6 />;
  }
};

const EditWebsite = () => {
  const [Edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("Albert Einstein");
  const [roll, setRoll] = useState("Physicist at University of ZurichRämis");
  const [img, setImg] = useState(`data:image/jpeg;base64,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`);
  const [bio, setBio] = useState(
    " Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc^2. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, in particular his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory."
  );
  const [articles, setarticles] = useState([
    "On the Relativity Principle and the Conclusions Drawn from It",
    "On the Electrodynamics of Moving Bodies",
    "Does the Inertia of a Body Depend Upon Its Energy Content?",
  ]);
  const [interests, setInterests] = useState([
    "AI",
    "CyperSecurity",
    "Cloud computing",
  ]);
  const [account, setAccount] = useState("#");
  const [selectedColor, setSelectedColor] = useState("#0074d9");
  const [finish, setFinish] = useState(true);
  const token = localStorage.getItem("token");

  const handleRegenerate = () => {
    navigate("/showtemplate");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {finish && (
        <aside className="w-1/4 h-screen bg-gradient-to-b from-blue-950 to-gray-900 p-6 border-r border-gray-600 shadow-xl overflow-y-auto">
          <h2 className="text-3xl font-bold text-white mb-8">🛠️ Editor</h2>

          {Edit ? (
            <div className="space-y-6 text-white">
              <div>
                <label className="block mb-2 font-medium text-white">
                  Choose Theme Color
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "#0074d9", // Blue
                    "#dc2626", // Red
                    "#16a34a", // Green
                    "#f59e0b", // Amber
                    "#6b21a8", // Purple
                    "#0d9488", // Teal
                    "#ea580c", // Orange
                    "#3f3f46", // Zinc
                    "#db2777", // Pink
                  ].map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? "border-white scale-110"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-white">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-white">
                  Role
                </label>
                <input
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter role"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-white">
                  Image URL
                </label>
                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-white">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter bio"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-white">
                  Articles
                </label>
                <div className="space-y-2">
                  {articles.map((article, index) => (
                    <input
                      key={index}
                      value={article}
                      onChange={(e) => {
                        const updated = [...articles];
                        updated[index] = e.target.value;
                        setarticles(updated);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder={`Article ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setarticles([...articles, ""])}
                  className="mt-2 text-sm text-blue-300 hover:text-blue-400"
                >
                  ➕ Add Article
                </button>
              </div>

              <div>
                <label className="block mb-2 font-medium text-white">
                  Interests
                </label>
                <div className="space-y-2">
                  {interests.map((interest, index) => (
                    <input
                      key={index}
                      value={interest}
                      onChange={(e) => {
                        const updated = [...interests];
                        updated[index] = e.target.value;
                        setInterests(updated);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder={`Interest ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setInterests([...interests, ""])}
                  className="mt-2 text-sm text-blue-300 hover:text-blue-400"
                >
                  ➕ Add Interest
                </button>
              </div>

              <div>
                <label className="block mb-1 font-medium text-white">
                  GoogleScholar Account Link
                </label>
                <input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="https://..."
                />
              </div>

              <button
                onClick={() => setEdit(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
              >
                ✅ Finish Editing
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <button
                onClick={() => setFinish(false)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
              >
                ✅ Apply Changes
              </button>

              <button
                onClick={() => setEdit(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
              >
                ✏️ Edit Website
              </button>

              <button
                onClick={handleRegenerate}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
              >
                🔄 Regenerate Website
              </button>
            </div>
          )}
        </aside>
      )}

      {/* Preview Section */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-300 h-screen">
        {/* {renderCase(websiteId.website) } */}
        <Web
          name={name}
          roll={roll}
          img={img}
          bio={bio}
          articles={articles}
          interests={interests}
          account={account}
          color={selectedColor}
          finish={finish}
          setFinish={setFinish}
        />
      </main>
    </div>
  );
};

export default EditWebsite;
