import styles from '../styles/Home.module.css'
import Head from 'next/head'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
export default function Login() {
    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <div className={styles.container}>
                <Head>
                    <title>Login - Dapp</title>
                    <meta name="description" content="A Dapp to add user details" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="flex justify-center items-center flex-col h-screen">
                    <Box
                        className="flex flex-col justify-center items-center p-10 bg-gray-800 w-1/4"
                        Validate
                        autoComplete="off"
                    >
                        <Image src='/iconmonstr-product-8-240.png' width={100} height={100} />
                        <TextField className="mb-8 bg-gray-100 w-full" label="Email" variant="outlined" type={'email'} required />
                        <TextField className="mb-8 bg-gray-100 w-full" label="Password" variant="outlined" type={'password'} required />
                        <Button className="mb-4 bg-blue-500 shadow-sm shadow-blue-600/50" variant="contained">Login</Button>
                        <Typography className="text-white hover:text-blue-600 transition ease-in-out " variant="overline" gutterBottom component="div">Need an account ? <Link href={'/register'}>Register</Link> </Typography>

                    </Box>
                </main>
            </div>
        </motion.div>
    )
}