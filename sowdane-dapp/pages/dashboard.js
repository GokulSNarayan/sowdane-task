import Layout from "../components/layout";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from "react";
import Button from '@mui/material/Button';
import useSWR from 'swr'

export default function Dashboard() {
    const [readOnly, setReadOnly] = useState(true);

    const toggleEdit = () => {
        setReadOnly(prev => !prev)
    }
    return (
        <Layout>
            <div className="m-2 p-4 flex flex-col items-center justify-start">

                <Box
                    className="flex flex-col bg-slate-100 w-3/4 mb-4 p-4"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-read-only-input"
                        label="Name"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: readOnly,
                        }}
                        variant="standard"
                        color={readOnly ? "" : "success"}

                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Email"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: readOnly,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Phone"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: readOnly,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Password"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: readOnly,
                        }}
                        variant="standard"
                    />
                </Box>
                <Button className="mb-4 bg-blue-500 shadow-sm shadow-blue-600/50" variant="contained" onClick={toggleEdit}>Edit</Button>
            </div>
        </Layout>
    );
}