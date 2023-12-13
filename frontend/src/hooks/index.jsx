import { NotificationContext } from "../Context/NotificationProvider"
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeProvider"
import { AuthContext } from "../Context/AuthProvider"

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useNotification = () => {
    return useContext(NotificationContext)
}

export const useAuth = () => {
    return useContext(AuthContext)
}