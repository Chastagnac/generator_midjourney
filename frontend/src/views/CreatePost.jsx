import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

export const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value]})
  };
  const handleSurpriseMe = () => {
    console.log("object");
    const randomPrompt = getRandomPrompt(form.prompt )
    setForm({ ...form, randomPrompt})
  };
  const generateImage = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Créé des images à partir de ton imagination et partage les avec la
          communauté
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Votre nom"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="Votre prompt"
            type="text"
            name="prompt"
            placeholder="a sea otter with a pearl earring by Johannes Vermeer"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </form>
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          className="text-white bg-green-900 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={generateImage}
        >
          {generatingImg ? "Génération.." : "Générer"}
        </button>
      </div>
      <div className="mt-10">
        <p className="mt-2 text-[#666e75] text-[14px]">
          Une fois l'image créée, vous pouvez la partager avec les membres de la
          communauté !
        </p>
        <button
          type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {loading ? "Partage..." : "Partagez avec la communauté "}
        </button>
      </div>
    </section>
  );
};

export default CreatePost;
