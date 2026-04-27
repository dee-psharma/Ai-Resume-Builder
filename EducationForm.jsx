import { Briefcase, GraduationCap, Plus, Sparkles, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };

    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };

    onChange(updated);
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <GraduationCap className="size-5" />
            education
          </h3>

          <p className="text-sm text-gray-500">Add your education details</p>
        </div>

        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <Plus className="size-4" />
          Add education
        </button>
      </div>

      {/* Empty State */}
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              {/* Top */}
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-800">
                  Education #{index + 1}
                </h4>

                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Institution Name"
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  className="px-3 py-2 text-sm border border-gray-300"
                />

                <input
                  type="text"
                  placeholder="Degree (e.g., Bachelor's, Master's)"
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  className="px-3 py-2 text-sm  border border-gray-300"
                />

                <input
                  type="text"
                  value={education.field || ""}
                  placeholder="Field of Study"
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  className="px-3 py-2 text-sm border border-gray-300"
                />

                <input
                  type="month"
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  className="px-3 py-2 text-sm  border border-gray-300 "
                />
              </div>

              {/* Checkbox */}

              <input
                type="text"
                value={education.gpa || ""}
                placeholder="GPA (optional)"
                onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300"
              />

              {/* Description */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  {/* <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label> */}

                  <button
                    type="button"
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    Enhance with AI
                  </button>
                </div>

                {/* <textarea
                  rows={4}
                  placeholder="Describe your key responsibilities and achievements..."
                  value={education.description || ""}
                  onChange={(e) =>
                    updateEducation(index, "description", e.target.value)
                  }
                  className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 resize-none"
                /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
