import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import camelCase from 'lodash/fp/camelCase';
//Custom Components
import Section from '@/components/common/Section';
//Image
import Decoration from '@/images/contact.jpg';
//Material-UI Icons
import SendIcon from '@mui/icons-material/Send';

const TextField = styled(MuiTextField)(({ theme }) => ({
    '& label': {
        color: theme.palette.text.primary
    },
    '& label.Mui-focused': {
        color: theme.palette.primary.light
    },
    '& .MuiInputBase-root': {
        borderRadius: '4px 4px 0 0',
        backgroundColor: theme.palette.secondary.light,
        transition: theme.transitions.create(['background-color']),
        '&:focus': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
}));

function Contact() {
    const ALERT_TIMEOUT = 7000;

    const params = ['Message', 'First Name', 'Last Name', 'Subject', 'E-Mail'];
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({ defaultValues: params.reduce((acc, curr) => (acc[curr] = '', acc), {}) });

    const [alert, setAlert] = useState({
        open: false,
        error: false,
        message: ''
    });

    const alertTimeout = useRef(null);

    const handleAlert = (error) => {
        if (alertTimeout.current)
            clearTimeout(alertTimeout.current);

        if (!error) {
            setAlert({
                open: true,
                error: false,
                message: 'E-Mail Sent Successfully'
            });

            reset({ keepDefaultValues: true });
        }
        else {
            let message = "";
            if (!window.navigator.onLine)
                message = "You are not connected to the internet";
            else {
                const { status } = error;
                message = "The E-Mail could not be sent due to some error";

                if (status === 402 || status === 412)
                    message += " but don't worry, your E-Mail is saved in the Database";
            }

            setAlert({
                open: true,
                error: true,
                message
            });
        }

        alertTimeout.current = setTimeout(() => {
            if (!error)
                reset({ keepDefaultValues: true });

            setAlert({
                open: false,
                error: false,
                message: '',
            });
        }, ALERT_TIMEOUT);
    }

    const onSubmit = async (data) => {
        const content = params.reduce((acc, curr) => (acc[camelCase(curr)] = data[curr], acc), {});

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                content,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            handleAlert();
        }
        catch (e) {
            handleAlert(e);
        }
    };

    const onCloseSnackbar = () => {
        setAlert({
            open: false,
            error: false,
            message: '',
        });
    };

    return (
        <Section id='contact' maxWidth='md' minHeight>
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    backgroundColor: 'secondary.main'
                }}>
                <Box sx={{
                    py: 3, px: 4,
                    width: {
                        xs: 1,
                        md: 0.7
                    }
                }}>
                    <Typography gutterBottom variant='h3'>Get In Touch ✉️</Typography>
                    <Typography variant='body1'>
                        Have an exciting project that could use my help? Want to start a project with me? Want to meet? Want to chit-chat? My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: {
                            xs: 2,
                            md: 4
                        },
                        my: {
                            xs: 2,
                            md: 4
                        }
                    }}>
                        {['First Name', 'Last Name'].map(input => (
                            <Controller
                                key={input}
                                name={input}
                                rules={{ required: true, maxLength: 20 }}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        variant='filled'
                                        label={
                                            (errors[input]?.type == 'required' && `${input} is Required`) ||
                                            (errors[input]?.type == 'maxLength' && `${input} exceeds max length`) ||
                                            input
                                        }
                                        fullWidth
                                        onChange={onChange}
                                        value={value}
                                        autoComplete='on'
                                        error={Boolean(errors[input])}
                                    />
                                )}
                                control={control}
                            />
                        ))}
                    </Box>
                    <React.Fragment>
                        {[
                            {
                                label: 'E-Mail',
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            },
                            'Subject',
                            {
                                label: 'Message',
                                multiline: true,
                                rows: 2
                            }
                        ].map(input => (
                            <Controller
                                key={input instanceof Object ? input.label : input}
                                name={input instanceof Object ? input.label : input}
                                rules={{
                                    required: true,
                                    ...((input instanceof Object) && { pattern: input?.pattern })
                                }}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        variant='filled'
                                        sx={{
                                            mb: {
                                                xs: 2,
                                                md: 4
                                            },
                                        }}
                                        fullWidth
                                        {...((input instanceof Object) ? {
                                            ...(input.multiline && {
                                                multiline: true,
                                                maxRows: input.rows,
                                            }),
                                            label: (
                                                (errors[input.label]?.type == 'required' && `${input.label} is Required`) ||
                                                (errors[input.label]?.type == 'pattern' && `Provided ${input.label} is of wrong format`) ||
                                                (errors[input.label]?.type == 'maxLength' && `${input.label} exceeds max length`) ||
                                                input.label
                                            ),
                                            error: Boolean(errors[input.label])
                                        } : {
                                            label: (
                                                (errors[input]?.type == 'required' && `${input} is Required`) ||
                                                (errors[input]?.type == 'pattern' && `Provided ${input} is of wrong format`) ||
                                                (errors[input]?.type == 'maxLength' && `${input} exceeds max length`) ||
                                                input
                                            ),
                                            error: Boolean(errors[input])
                                        })}
                                        onChange={onChange}
                                        value={value}
                                        autoComplete='on'
                                    />
                                )}
                            />
                        ))}
                    </React.Fragment>
                    <Box sx={{
                        display: 'flex',
                        width: 1,
                        justifyContent: isSubmitting ? 'space-between' : 'center'
                    }}>
                        <Button
                            size='large'
                            variant='contained'
                            color='primary'
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            disableElevation
                            endIcon={<SendIcon />}
                        >
                            Submit
                        </Button>
                        {isSubmitting && <CircularProgress color='primary' />}
                    </Box>
                </Box>
                <Box sx={{
                    position: 'relative',
                    width: {
                        xs: 0,
                        md: 0.3
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        height: 1,
                        width: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    },
                }}>
                    <Image
                        src={Decoration}
                        layout='fill'
                        objectFit='cover'
                        alt=""
                    />
                </Box>
            </Paper>

            {/* Alerts */}
            <Snackbar
                open={alert.open}
                autoHideDuration={ALERT_TIMEOUT}
                onClose={onCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                TransitionComponent={Fade}>
                <Alert onClose={onCloseSnackbar} severity={alert.error ? 'error' : 'success'} variant='filled'>
                    {alert.message}
                </Alert>
            </Snackbar>

        </Section>
    );
}

export default Contact;