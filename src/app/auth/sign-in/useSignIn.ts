'use client'
import { yupResolver } from '@hookform/resolvers/yup'
// import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import useQueryParams from '@/hooks/useQueryParams'
import { useNotificationContext } from '@/states/useNotificationContext'
import { useAuthContext } from '@/states/useAuthContext'

const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { showNotification } = useNotificationContext()
  const { saveSession } = useAuthContext()

  const queryParams = useQueryParams()

  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@demo.com',
      password: '123456',
    },
  })

  type LoginFormFields = yup.InferType<typeof loginFormSchema>

  const login = handleSubmit(async (values: LoginFormFields) => {
    setLoading(true)
    
    // Temporary mock authentication without NextAuth
    if (values.email === 'user@demo.com' && values.password === '123456') {
      const mockUser = {
        id: '1',
        email: 'user@demo.com',
        username: 'demo_user',
        password: '123456',
        firstName: 'Demo',
        lastName: 'User',
        role: 'Admin',
        token: 'mock-token-123'
      }
      
      saveSession(mockUser)
      push(queryParams['redirectTo'] ?? '/')
      showNotification({ message: 'Successfully logged in. Redirecting....', type: 'success' })
    } else {
      showNotification({ message: 'Invalid credentials', type: 'danger' })
    }
    
    setLoading(false)
  })

  return { loading, login, control }
}

export default useSignIn
