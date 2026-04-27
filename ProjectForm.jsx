import { Folder, GraduationCap, Plus, Sparkles, Trash2 } from "lucide-react";
import React from "react";

const ProjectForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };

    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };

    onChange(updated);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <Folder className="size-5" />
            Projects
          </h3>

          <p className="text-sm text-gray-500">Add your projects</p>
        </div>

        <button
          onClick={addProject}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {/* Empty State */}

      <div className="space-y-4 mt-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4"
          >
            {/* Top */}
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-gray-800">
                Project #{index + 1}
              </h4>

              <button
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            {/* Inputs */}
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Project Name"
                value={project.name || ""}
                onChange={(e) => updateProject(index, "name", e.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Project Type"
                value={project.type || ""}
                onChange={(e) => updateProject(index, "type", e.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <textarea
                rows={4}
                placeholder="Describe your projects..."
                value={project.description || ""}
                onChange={(e) =>
                  updateProject(index, "description", e.target.value)
                }
                className="w-full px-3 py-2 text-sm  rounded-lg resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;
