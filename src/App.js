import React, { useState, useEffect } from 'react'

function AuthForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    useEffect(() => {
        console.log('Real-time data:', formData)
    }, [formData])

    return (
        <div className= "wrapper">
            <h2>Авторизация / Регистрация</h2>
            <form>
                <label>
                    <p>ФИО:</p>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Возраст:</p>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Электронная почта:</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Номер телефона:</p>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
            </form>

            <div className="real_time">
                <h3>Данные в режиме реального времени:</h3>
                <p>ФИО: {formData.fullName}</p>
                <p>Возраст: {formData.age}</p>
                <p>Email: {formData.email}</p>
                <p>Номер телефона: {formData.phoneNumber}</p>
            </div>
        </div>
    )
}

export default AuthForm
