import { CheckCircle, MoreVertOutlined } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../API/fetchFromAPI';

import { videoBasic } from '../../API/basic';

// import { videoBasic } from '../../API/basic';
function Search({ data }) {
    const { id } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?q=${id}&part=snippet,id&regionCode=US&order=date`).then((data) => setResults(data.items));
    }, [id]);
    console.log(results);
    return (
        <Stack mt="16px" ml="24px" gap={2}>
            <Card sx={{ width: '100%', display: 'flex', gap: '12px', boxShadow: 'none' }}>
                <Link
                    to={data?.id?.videoId ? `/videos/${data.id.videoId}` : '/videos/vanvi'}
                    style={{ textDecoration: 'none ', color: '#000' }}
                >
                    <CardMedia
                        component="img"
                        alt={videoBasic.title}
                        sx={{ width: '100%', height: '180px' }}
                        image={videoBasic.urlBasic}
                        // ref={videoRef}
                        // muted
                    />
                </Link>
                <CardContent sx={{ p: 0, flex: 1 }}>
                    <Link
                        to={data?.id?.videoId ? `/videos/${data.id.videoId}` : '/videos/vanvi'}
                        style={{ textDecoration: 'none ', color: '#000' }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight={500}
                            color="#000"
                            fontSize="18px"
                            sx={{ height: '40px', lineHeight: '20px', overflow: 'hidden', mt: 1.2 }}
                        >
                            title o day title o daytitle o daytitle o daytitle o daytitle o daytitle o daytitle o
                            daytitle o daytitle o daytitle o daytitle o day
                        </Typography>
                    </Link>
                    <Typography variant="body1" fontWeight={300} color="#606060" fontSize="12px" mb="12px">
                        18N Lượt xem 2 ngày trước
                    </Typography>
                    <Link
                        to={data?.snippet?.channelId ? `/channel/${data.snippet.channelId}` : '/videos/vanvi'}
                        style={{ textDecoration: 'none ', display: 'flex', gap: '12px' }}
                    >
                        <Avatar sx={{ width: '24px', height: '24px' }} />
                        <Typography variant="body1" fontWeight={300} color="#606060" fontSize="12px">
                            channel o day
                            <CheckCircle sx={{ color: 'blue', fontSize: '12px', ml: '5px' }} />
                        </Typography>
                    </Link>

                    <Typography
                        sx={{ mt: '16px', height: '26px', lineHeight: '13px', overflow: 'hidden' }}
                        variant="body1"
                        fontWeight={300}
                        color="#606060"
                        fontSize="12px"
                    >
                        Những Bản Lofi Việt Nhẹ Nhàng Cực Chill | Nhạc Lofi Chill Buồn Nhất 2021 ♫ Lofi Gây Nghiện Hay
                        Nhất Những Bản Lofi Việt ...
                    </Typography>
                </CardContent>
                <MoreVertOutlined />
            </Card>
        </Stack>
    );
}

export default Search;
