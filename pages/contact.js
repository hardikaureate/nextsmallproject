import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const Contact = () => {
    const [user, setUser] = useState({
        txtName: '',
        txtEmail: '',
        txtNumber: '',
        txtMessage: '',
        txtComment: ''
    })
    let name, value
    const getUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        const { txtName, txtEmail, txtNumber, txtMessage, txtComment } = user
        if (txtName && txtEmail && txtNumber && txtMessage && txtComment) {
            const result = await fetch("https://react-form-234a8-default-rtdb.firebaseio.com/aureatedb.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    txtName,
                    txtEmail,
                    txtNumber,
                    txtMessage,
                    txtComment
                })
            })
            if (result) {
                setUser({
                    txtName: '',
                    txtEmail: '',
                    txtNumber: '',
                    txtMessage: '',
                    txtComment: ''
                })
                alert('Your data added Succesfully')
            }
        }
        else {
            alert('Please fill all the Blanks')
        }
    }


    return (
        <div>
            <Navbar />
            <h1>Contact Page</h1>
            <form method="post">
                <div as="form" spacing={{ base: '4', md: '6' }}>
                    <label as="h2" size="3xl">
                        Contact
                    </label>
                    <p>
                        If you have any questions feel free to send our support team a message via the form below
                        and we&apos;ll be happy to help you.
                    </p>
                    <div direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '6' }}>
                        <div>
                            <label>Name</label>
                            {/* <input onChange={getUserData}  value={user.txtName} name="txtName"/> */}
                            <input type="text" onChange={getUserData} value={user.txtName} name="txtName" placeholder="First Name *" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="txtEmail" onChange={getUserData} value={user.txtEmail} placeholder="Enter Email *" />
                        </div>
                    </div>
                    <div direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '6' }}>
                        <div>
                            <label>Order Number</label>
                            <input name="txtNumber" onChange={getUserData} value={user.txtNumber} placeholder="Add order number *" />
                        </div>
                        <div>
                            <label>Which City?</label>
                            <select placeholder="Select an option" name="txtMessage" onChange={getUserData} value={user.txtMessage}>
                                <option value="Surat">Surat</option>
                                <option value="Baroda">Baroda</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea placeholder="Comment" resize="none" name="txtComment" onChange={getUserData} value={user.txtComment} />
                    </div>
                    <button type="submit" alignSelf="start" onClick={onSubmit}>
                        Send message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
