import React from 'react'
import { Mail, LockKeyhole, UserRoundPen } from 'lucide-react'

const Login = () => {

    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')

    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800'>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md text-center backdrop-blur-lg bg-white/5 border border-green-500/20 rounded-2xl px-8 shadow-xl"
            >

                <h1 className="text-green-300 text-3xl mt-10 font-semibold">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-green-200/60 text-sm mt-2">
                    Please {state} to continue
                </p>

                {/* Name */}
                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-green-500/10 border border-green-400/20 h-12 rounded-full pl-5 gap-2 focus-within:ring-2 focus-within:ring-green-400 transition">

                        <UserRoundPen size={18} className="text-green-300" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full bg-transparent text-white placeholder-green-200/50 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                {/* Email */}
                <div className="flex items-center w-full mt-4 bg-green-500/10 border border-green-400/20 h-12 rounded-full pl-5 gap-2 focus-within:ring-2 focus-within:ring-green-400 transition">

                    <Mail size={18} className="text-green-300" />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full bg-transparent text-white placeholder-green-200/50 outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password */}
                <div className="flex items-center mt-4 w-full bg-green-500/10 border border-green-400/20 h-12 rounded-full pl-5 gap-2 focus-within:ring-2 focus-within:ring-green-400 transition">

                    <LockKeyhole size={18} className="text-green-300" />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-white placeholder-green-200/50 outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Forgot */}
                <div className="mt-4 text-left">
                    <button className="text-sm text-green-400 hover:text-green-300 transition">
                        Forgot password?
                    </button>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-4 w-full h-11 rounded-full text-black font-medium bg-green-400 hover:bg-green-300 transition shadow-lg shadow-green-500/20"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                {/* Toggle */}
                <p
                    onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                    className="text-green-200/70 text-sm mt-4 mb-10 cursor-pointer"
                >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-green-400 hover:underline ml-1">
                        click here
                    </span>
                </p>

            </form>
        </div>
    )
}

export default Login