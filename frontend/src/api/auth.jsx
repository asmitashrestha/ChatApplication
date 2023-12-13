import client from "./client"

export const createUser = async(userInfo) => {
    try {
        const { data } = await client.post('/users/create', userInfo)
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            console.log(response.data);
            return response.data

        }
        console.log(error.message);
        return { error: error.message || error }
    }
}

export const verifyUserEmail = async(userInfo) => {
    try {
        const { data } = await client.post('/users/verify-email', userInfo)
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}


export const signInUser = async(userInfo) => {
    try {
        const { data } = await client.post('/users/signin', userInfo)
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}

export const getIsAuth = async(token) => {
    try {
        const { data } = await client.get('/users/is-auth', {
            headers: {
                Authorization: 'Bearer ' + token,
                accept: 'application/json',
            }
        })
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}

export const forgetPassword = async(email) => {
    try {
        const { data } = await client.post('/users/forgot-password', { email })
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}

export const verifyPasswordResetToken = async(token, userId) => {
    try {
        const { data } = await client.post('/users/verify-pass-reset-token', { token, userId })
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}

export const resetPassword = async(passwordInfo) => {
    try {
        const { data } = await client.post('/users/reset-password', passwordInfo)
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}

export const resendEmailVerificationToken = async(userId) => {
    try {
        const { data } = await client.post('/users/resend-verification-token', { userId })
        return data
    } catch (error) {
        const { response } = error
        if (response && response.data) {
            return response.data
        }
        return { error: error.message || error }
    }
}