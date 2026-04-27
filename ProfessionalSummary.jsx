import { Sparkle, Sparkles } from 'lucide-react'
import React from 'react'

const ProfessionalSummary = ({data,onChange,setResumeData}) => {

    const addExperience = () => {
    const newExperience = {
        company: "",
        position: "",
        start_date: "",
        end_date: "",
        description: "",
        is_current: false
    };

    onChange([...data, newExperience]);
};

const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
};


const updatedExperience=(index,field,value)=>{
    const updated=[...data];
    updated[index]={...upadted[index],[field]:value}

        onChange(updated)
    
}

  return (
    <div className='space-y-4'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Summary</h3>
                <p className='text-sm text-gray-500'>Add summary for your resume here</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-300 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50">
    <Sparkles className="size-4" />
    AI Enhance
</button>

        </div>

        <div className='mt-6'>

            <textarea value={data || ""} onChange={(e)=>onChange(e.target.value)} rows={7} name="" id="" className='w-full p-3 px-4 mt-2 border test-sm borde-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."/>

                <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>
                    Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.
                </p>

        </div>
      
    </div>
  )
}

export default ProfessionalSummary
