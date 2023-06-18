import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import { makeStyles } from '@mui/styles';
import { getDiscussionDetails } from '../../store/actions/discussionQuestionsAction';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { useLocation, useNavigate } from 'react-router';
import { Avatar, Input, Typography } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
interface DiscussionDetailsPage {}
interface IDiscussion {
  title: string;
  body: string;
  id: number;
  userId: number;
}

const DiscussionDetailsPage: React.FC<DiscussionDetailsPage> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [discussion, setDiscussion] = useState<{
    title: string;
    body: string;
    id: number;
    userId: number;
  }>({
    title: '',
    body: '',
    id: 0,
    userId: 0,
  });
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentLocation = location.pathname;
  const currentId = Number(currentLocation.at(-1)) + 1;

  const state = useAppSelector((state) => state.categoriesSlice);
  //TODO ТУТ НУЖНО ПОЛУЧИТЬ МАССИВ ИЗ СТЕЙТА , ПОКА ЧТО БЕРЕМ СТАТИЧНЫЕ ДАННЫЕ
  const useStyles = makeStyles({
    btnAddCategory: {
      backgroundColor: '#909090',
    },
  });
  let item: any = [];
  const fetchData = async () => {
    setIsLoading(true);
    try {
      item = await dispatch(getDiscussionDetails(`${currentId}`));
      setDiscussion(item.payload.data);
      setIsLoading(false);

      return item.payload.data;
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(discussion);
    console.log(discussion.title);
  }, [discussion]);

  const navigate = useNavigate();

  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box
          sx={{
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            borderTop: '2px solid rgb(235 51 73)',
            background: 'white',
            padding: '20px',
          }}
        >
          {/* {discussion.map((item) => ( */}
          <Typography component={'span'} sx={{ fontSize: '22px', fontWeight: '700' }}>
            {isLoading ? <LoadingSpinner /> : discussion.title}
          </Typography>
          <Typography component={'span'}>
            {isLoading ? <LoadingSpinner /> : discussion.body}
          </Typography>
          {/* ))} */}
        </Box>
        <Box
          sx={{
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            borderTop: '2px solid rgb(235 51 73)',
            background: 'white',
            padding: '20px',
          }}
        >
          <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>Комментарии</Typography>
          <Box
            sx={{
              borderTop: '1px solid rgb(33, 37, 41)',
              gap: '10px',
              padding: '10px 0',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontSize: '18px' }}>комментариев</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Avatar alt="pfp" src=""></Avatar>
              <Input
                sx={{ border: '1px solid #eee', width: '100%' }}
                type="text"
                placeholder="Оставьте свой комментарий.."
              />
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};
export default DiscussionDetailsPage;
