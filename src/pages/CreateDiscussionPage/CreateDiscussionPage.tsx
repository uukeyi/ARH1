import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createDiscussionQuestion } from '../../store/actions/discussionQuestionsAction';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
interface CreateDiscussionPage {}

const CreateDiscussionPage: React.FC<CreateDiscussionPage> = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  type formValues = {
    title: string;
    description: string;
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const {isAuthSettings} = useAuth()
  const onSubmit: SubmitHandler<formValues> = (data) => {
    const dataCreate = {title  : data.title , description : data.description , authorId : isAuthSettings.user.id , categoryId : 1} 
    dispatch(
      createDiscussionQuestion({
        data: dataCreate,
        setError: setIsError,
      })
    );
    navigate('/discussionFacade');
  };
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: 'rgb(235 51 73)',
    '&:hover': {
      backgroundColor: 'rgb(235 51 73)',
    },
    width: '200px',
  }));
  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            borderTop: '2px solid rgb(235 51 73)',
            background: 'white',
            padding: '20px',
          }}
        >
          <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>Создание новой темы</Typography>
          <Typography>
            Заполните поля формы и отправьте сообщение. Ваша тема появится сразу после проверки.
          </Typography>
          <FormControl
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <Typography>Заголовок</Typography>
              <Input
                {...register('title', {
                  required: 'Это поле обязательно!',
                  maxLength: {
                    value: 18,
                    message: 'Слишком длинное имя пользователя',
                  },
                })}
                sx={{ width: '70%' }}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <Typography>Текст</Typography>
              <TextField
                {...register('description', {
                  required: 'Это поле обязательно!',
                })}
                sx={{ width: '70%' }}
                multiline
                rows={2}
              />
            </Box>
            <ColorButton type="submit">Отправить</ColorButton>
          </FormControl>
        </Box>
      </div>
    </Box>
  );
};
export default CreateDiscussionPage;
