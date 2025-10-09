import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../State/Auth/Action.js'

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password')
        }
        dispatch(login(userData))
        // console.log(userData);

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <Grid container spacing={3}>


                    <Grid item size={12} >
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>

                    <Grid item size={12} >
                        <TextField
                            required
                            type='password'
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>

                    <Grid item size={12}>
                        <Button className='w-full '
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: '.8rem 0', bgcolor: '#9155FD' }}
                        >
                            Login
                        </Button>
                    </Grid>

                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='flex py-3 '>
                    <p>if you don't have an account ?</p>
                    <Button onClick={() => navigate('/register')} className='ml-5 ' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm